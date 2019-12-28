using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Data.Interfaces;
using WebApplication1.Data.Models;

namespace WebApplication1.Data.Repository
{
    public class ClientRepository : IClient
    {
        private readonly AppDBContent appDBContent;
        public ClientRepository(AppDBContent appDBContent)
        {
            this.appDBContent = appDBContent;
        }
        public IEnumerable<Client> Clients => appDBContent.Client;

        public Client GetClient(int id)
        {
            return appDBContent.Client.FirstOrDefault(x => x.id == id); 
        }
    }
}
