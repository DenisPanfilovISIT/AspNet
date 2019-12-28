using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Data.Interfaces;
using WebApplication1.Data.Models;

namespace WebApplication1.Data.Repository
{
    public class ToppingRepository : ITopping
    {
        private readonly AppDBContent appDBContent;
        public ToppingRepository(AppDBContent appDBContent)
        {
            this.appDBContent = appDBContent;
        }
        public IEnumerable<Topping> Toppings => appDBContent.Topping;

        public Topping GetTopping(int id)
        {
            return appDBContent.Topping.FirstOrDefault(x => x.id == id);
        }
    }
}
