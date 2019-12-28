using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Data.Models;

namespace WebApplication1
{
    public class AppDBContent : DbContext
    {
        public AppDBContent(DbContextOptions<AppDBContent> options) : base(options)
        {

        }

        public DbSet<Order> Order { get; set; }
        public DbSet<Status> Status { get; set; }
        public DbSet<Client> Client { get; set; }
        public DbSet<Mesto> Mesto { get; set; }
        public DbSet<Forma> Forma { get; set; }
        public DbSet<Morozhenoe> Morozhenoe { get; set; }
        public DbSet<Rozhok> Rozhok { get; set; }
        public DbSet<Sharik> Sharik { get; set; }
        public DbSet<Topping> Topping { get; set; }
        public DbSet<Ulica> Ulica { get; set; }
        public DbSet<Vkus> Vkus { get; set; }
        public DbSet<Employee> Employee { get; set; }


    }
}
