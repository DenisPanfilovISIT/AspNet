using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Data.Interfaces;
using WebApplication1.Data.Models;

namespace WebApplication1.Data.Repository
{
    public class VkusRepository : IVkus
    {
        private readonly AppDBContent appDBContent;
        public VkusRepository(AppDBContent appDBContent)
        {
            this.appDBContent = appDBContent;
        }
        public IEnumerable<Vkus> Vkuses => appDBContent.Vkus;

        public Vkus GetVkus(int id)
        {
            return appDBContent.Vkus.FirstOrDefault(x => x.id == id);
        }
    }
}
