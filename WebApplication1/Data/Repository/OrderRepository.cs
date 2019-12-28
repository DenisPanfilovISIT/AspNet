using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Data.Interfaces;
using WebApplication1.Data.Models;

namespace WebApplication1.Data.Repository
{
    public class OrderRepository : IOrder
    {
        private readonly AppDBContent appDBContent;
        public OrderRepository(AppDBContent appDBContent)
        {
            this.appDBContent = appDBContent;
        }
        public IEnumerable<Order> Orders => appDBContent.Order// без этого невозможно обращаться к данным из другой таблицы
            .Include(x => x.Client)
            .Include(x => x.Status)
            .Include(x => x.Mesto.Ulica);


        public Order GetOrder(int id)
        {
            return appDBContent.Order
                .Include(x => x.Client)
                .Include(x => x.Status)
                .Include(x => x.Mesto.Ulica)
                .FirstOrDefault(x => x.id == id);
        }
    }
}
