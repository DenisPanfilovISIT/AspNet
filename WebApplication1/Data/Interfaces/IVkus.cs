using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Data.Models;

namespace WebApplication1.Data.Interfaces
{
    public interface IVkus
    {
        IEnumerable<Vkus> Vkuses { get; }
        Vkus GetVkus(int id);
    }
}
