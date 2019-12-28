using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Data.Models
{
    public class Status
    {
        public int id { get; set; }

        [StringLength(50)]
        public string nazv { get; set; }
    }
}
