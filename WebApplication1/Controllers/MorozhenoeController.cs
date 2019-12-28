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
    public class MorozhenoeController : Controller
    {
        private readonly IMorozhenoe _Morozhenoe;
        public MorozhenoeController(IMorozhenoe morozhenoe)
        {
            _Morozhenoe = morozhenoe;
        }
        [HttpGet("[action]")]
        public IEnumerable<Morozhenoe> GetMorozhenoes()
        {
            var vyvod = _Morozhenoe.Morozhenoes;
            return vyvod;

        }
    }
}
