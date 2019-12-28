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
    public class UlicaController:Controller
    {
        private AppDBContent _db;
        private readonly IUlica _Ulica;
        public UlicaController(IUlica ulica, AppDBContent db)
        {
            _Ulica = ulica;
            _db = db;
        }
        [HttpGet("[action]")]
        public IEnumerable<Ulica> GetUlicas()
        {
            var vyvod = _Ulica.Ulicas;
            return vyvod;

        }

        [HttpGet("[action]")]
        public Ulica GetUlica([FromQuery]int id)
        {
            var stat = _Ulica.GetUlica(id);
            return stat;
        }
        [HttpPost("[action]")]
        public async Task<IActionResult> EditUlica([FromBody]Ulica ulica)
        {
            var cl = _db.Ulica
                .Where(x => x.id == ulica.id)
                .FirstOrDefault();
            cl.nazv = ulica.nazv;

            await _db.SaveChangesAsync();
            return Ok();
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> AddUlica([FromBody]Ulica ulica)
        {
            _db.Ulica.Add(ulica);
            await _db.SaveChangesAsync();
            return Ok();
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> DeleteUlica([FromBody]Ulica ulica)
        {
            var vyvod = _db.Ulica
                .Where(x => x.id == ulica.id)
                .FirstOrDefault();
            _db.Ulica.Remove(vyvod);
            await _db.SaveChangesAsync();
            return Ok();
        }
    }
}
