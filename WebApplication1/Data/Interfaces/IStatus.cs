using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Data.Models;

namespace WebApplication1.Data.Interfaces
{
    public interface IStatus
    {
        IEnumerable<Status> Statuses { get; }
        Status GetStatus(int id);
    }
}
