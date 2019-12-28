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
    public class ToppingController:Controller
    {
        private readonly ITopping _Topping;
        public ToppingController(ITopping topping)
        {
            _Topping = topping;
        }
        [HttpGet("[action]")]
        public IEnumerable<Topping> GetToppings()
        {
            var vyvod = _Topping.Toppings;
            return vyvod;

        }
    }
}
