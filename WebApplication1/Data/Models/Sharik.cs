using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Data.Models
{
    public class Sharik
    {
        public int id { get; set; }

        [StringLength(50)]
        public string nazv { get; set; }

        [StringLength(50)]
        public string opisanie { get; set; }

        public decimal cena { get; set; }


    }
}
