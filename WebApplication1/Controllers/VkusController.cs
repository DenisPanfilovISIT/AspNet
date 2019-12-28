using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Data.Interfaces;
using WebApplication1.Data.Models;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    public class VkusController:Controller
    {
        private AppDBContent _db;
        private readonly IVkus _Vkus;
        public VkusController(IVkus vkus, AppDBContent db)
        {
            _db = db;
            _Vkus = vkus;
        }
        [HttpGet("[action]")]
        public IEnumerable<Vkus> GetVkuses()
        {
            var vyvod = _Vkus.Vkuses;
            return vyvod;

        }
        [HttpGet("[action]")]
        public Vkus GetVkus ([FromQuery]int id)
        {
            var stat = _Vkus.GetVkus(id);
            return stat;
        }
        [HttpPost("[action]")]
        public async Task<IActionResult> EditVkus([FromBody]Vkus vkus)
        {
            var cl = _db.Vkus
                .Where(x => x.id == vkus.id)
                .FirstOrDefault();
            cl.nazv = vkus.nazv;

            await _db.SaveChangesAsync();
            return Ok();
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> AddVkus([FromBody]Vkus vkus)
        {
            _db.Vkus.Add(vkus);
            await _db.SaveChangesAsync();
            return Ok();
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> DeleteVkus([FromBody]Vkus vkus)
        {
            var vyvod = _db.Vkus
                .Where(x => x.id == vkus.id)
                .FirstOrDefault();
            _db.Vkus.Remove(vyvod);
            await _db.SaveChangesAsync();
            return Ok();
        }
    
}
}
