using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Data.Models
{
    public class Rozhok
    {
        public int id { get; set; }

        public decimal cena { get; set; }

        [StringLength(50)]
        public string opisanie { get; set; }

        public int vkusID { get; set; }
        public virtual Vkus Vkus { get; set; }

        public int formaID { get; set; }
        public virtual Forma Forma { get; set; }
    }
}
