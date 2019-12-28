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
    public class FormaController:Controller
    {
        private AppDBContent _db;
        private readonly IForma _Forma;
        public FormaController(IForma forma, AppDBContent db)
        {
            _Forma = forma;
            _db = db;
        }
        [HttpGet("[action]")]
        public IEnumerable<Forma> GetFormas()
        {
            var vyvod = _Forma.Formas;
            return vyvod;

        }

        [HttpGet("[action]")]
        public Forma GetForma([FromQuery]int id)
        {
            var stat = _Forma.GetForma(id);
            return stat;
        }
        [HttpPost("[action]")]
        public async Task<IActionResult> EditForma([FromBody]Forma forma)
        {
            var cl = _db.Forma
                .Where(x => x.id == forma.id)
                .FirstOrDefault();
            cl.nazv = forma.nazv;
            cl.vmestimost = forma.vmestimost;

            await _db.SaveChangesAsync();
            return Ok();
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> AddForma([FromBody]Forma forma)
        {
            _db.Forma.Add(forma);
            await _db.SaveChangesAsync();
            return Ok();
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> DeleteForma([FromBody]Forma forma)
        {
            var vyvod = _db.Forma
                .Where(x => x.id == forma.id)
                .FirstOrDefault();
            _db.Forma.Remove(vyvod);
            await _db.SaveChangesAsync();
            return Ok();
        }
    }
}
