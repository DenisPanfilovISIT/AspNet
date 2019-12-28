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
    public class SharikController:Controller
    {
        private AppDBContent _db;
        private readonly ISharik _Sharik;
        public SharikController(ISharik sharik, AppDBContent db)
        {
            _Sharik = sharik;
            _db = db;
        }
        [HttpGet("[action]")]
        public IEnumerable<Sharik> GetShariks()
        {
            var vyvod = _Sharik.Shariks;
            return vyvod;

        }
        [HttpGet("[action]")]
        public Sharik GetSharik([FromQuery]int id)
        {
            var stat = _Sharik.GetSharik(id);
            return stat;
        }
        [HttpPost("[action]")]
        public async Task<IActionResult> EditSharik([FromBody]Sharik sharik)
        {
            var cl = _db.Sharik
                .Where(x => x.id == sharik.id)
                .FirstOrDefault();
            cl.nazv = sharik.nazv;
            cl.opisanie = sharik.opisanie;
            cl.cena = sharik.cena;

            await _db.SaveChangesAsync();
            return Ok();
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> AddSharik([FromBody]Sharik sharik)
        {
            _db.Sharik.Add(sharik);
            await _db.SaveChangesAsync();
            return Ok();
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> DeleteSharik([FromBody]Sharik sharik)
        {
            var vyvod = _db.Sharik
                .Where(x => x.id == sharik.id)
                .FirstOrDefault();
            _db.Sharik.Remove(vyvod);
            await _db.SaveChangesAsync();
            return Ok();
        }
    }
}
