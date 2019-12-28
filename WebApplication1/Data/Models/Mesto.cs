using System;
using System.Collections.Generic;
using System.Linq;
using System.ComponentModel.DataAnnotations;
using System.Threading.Tasks;

namespace WebApplication1.Data.Models
{
    public class Mesto
    {
        public int id { get; set; }

        [StringLength(50)]
        public string tag { get; set; }

        [StringLength(50)]
        public string house { get; set; }

        public int? podezd { get; set; }

        public int? etazh { get; set; }

        [StringLength(50)]
        public string kvartira { get; set; }

        [StringLength(50)]
        public string koddveri { get; set; }

        public int ulicaID { get; set; }
        public virtual Ulica Ulica { get; set; }
    }
}
