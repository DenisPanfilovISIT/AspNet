using System;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Data.Interfaces;
using WebApplication1.Data.Models;


namespace WebApplication1.Data.Repository
{
    public class StatusRepository : IStatus
    {
        private readonly AppDBContent appDBContent;
        public StatusRepository(AppDBContent appDBContent)
        {
            this.appDBContent = appDBContent;
        }
        public IEnumerable<Status> Statuses => appDBContent.Status;

        public Status GetStatus(int id)
        {
            return appDBContent.Status.FirstOrDefault(x => x.id == id);
        }
    }
}
