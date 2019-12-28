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
    public class DostavkaController : Controller
    {
        private readonly IMesto _Mesto;
        public DostavkaController(IMesto mesto)
        {
            _Mesto = mesto;
        }
        [HttpGet("[action]")]
        public IEnumerable<Mesto> GetMestos()
        {
            var vyvod = _Mesto.Mestos;
            return vyvod;

        }
    }
}
