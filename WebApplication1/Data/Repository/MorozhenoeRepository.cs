using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Data.Interfaces;
using WebApplication1.Data.Models;

namespace WebApplication1.Data.Repository
{
    public class MorozhenoeRepository : IMorozhenoe
    {
        private readonly AppDBContent appDBContent;
        public MorozhenoeRepository(AppDBContent appDBContent)
        {
            this.appDBContent = appDBContent;
        }
        public IEnumerable<Morozhenoe> Morozhenoes => appDBContent.Morozhenoe.Include(x=>x.Rozhok.Forma).Include(x=>x.Rozhok.Vkus);

        public Morozhenoe GetMorozhenoe(int id)
        {
            return appDBContent.Morozhenoe.Include(x => x.Rozhok.Forma).Include(x => x.Rozhok.Vkus).FirstOrDefault(x => x.id == id);
        }
    }
}
