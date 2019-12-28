using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Data.Models
{
    public class Vkus
    {
        public int id { get; set; }

        [StringLength(50)]
        public string nazv { get; set; }
    }
}
