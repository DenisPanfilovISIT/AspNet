using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Data.Interfaces;
using WebApplication1.Data.Models;

namespace WebApplication1.Data.Repository
{
    public class MestoRepository : IMesto
    {
        private readonly AppDBContent appDBContent;
        public MestoRepository(AppDBContent appDBContent)
        {
            this.appDBContent = appDBContent;
        }
        public IEnumerable<Mesto> Mestos => appDBContent.Mesto.Include(x => x.Ulica);

        public Mesto GetMesto(int id)
        {
            return appDBContent.Mesto.Include(x=>x.Ulica).FirstOrDefault(x => x.id == id);
        }
    }
}
