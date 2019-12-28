using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Data.Interfaces;
using WebApplication1.Data.Models;

namespace WebApplication1.Data.Repository
{
    public class SharikRepository : ISharik
    {
        private readonly AppDBContent appDBContent;
        public SharikRepository(AppDBContent appDBContent)
        {
            this.appDBContent = appDBContent;
        }
        public IEnumerable<Sharik> Shariks => appDBContent.Sharik;

        public Sharik GetSharik(int id)
        {
            return appDBContent.Sharik.FirstOrDefault(x => x.id == id);
        }
    }
}
