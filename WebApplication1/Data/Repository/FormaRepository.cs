using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Data.Interfaces;
using WebApplication1.Data.Models;

namespace WebApplication1.Data.Repository
{
    public class FormaRepository : IForma
    {
        private readonly AppDBContent appDBContent;
        public FormaRepository(AppDBContent appDBContent)
        {
            this.appDBContent = appDBContent;
        }
        public IEnumerable<Forma> Formas => appDBContent.Forma;

        public Forma GetForma(int id)
        {
            return appDBContent.Forma.FirstOrDefault(x => x.id == id);
        }
    }
}
