using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Data.Interfaces;
using WebApplication1.Data.Models;

namespace WebApplication1.Data.Repository
{
    public class RozhokRepository : IRozhok
    {
        private readonly AppDBContent appDBContent;
        public RozhokRepository(AppDBContent appDBContent)
        {
            this.appDBContent = appDBContent;
        }
        public IEnumerable<Rozhok> Rozhoks => appDBContent.Rozhok.Include(x=>x.Vkus).Include(x=>x.Forma);

        public Rozhok GetRozhok(int id)
        {
            return appDBContent.Rozhok.Include(x=>x.Vkus).Include(x=>x.Forma).FirstOrDefault(x => x.id == id);
        }
    }
}
