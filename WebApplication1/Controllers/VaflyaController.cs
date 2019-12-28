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
    public class VaflyaController : Controller
    {
        private readonly IRozhok _Rozhok;
        public VaflyaController(IRozhok rozhok)
        {
            _Rozhok = rozhok;
        }
        [HttpGet("[action]")]
        public IEnumerable<Rozhok> GetRozhoks()
        {
            var vyvod = _Rozhok.Rozhoks;
            return vyvod;

        }
    }
}
