using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Data.Models
{
    public class Order
    {[Key]
        public int id { get; set; }

        [DataType(DataType.Date)]
        public DateTime dateor { get; set; }

 

        public decimal summa { get; set; }

        
        public int statusID { get; set; }
        public virtual Status Status { get; set; }

      
        public int clientID { get; set; }
        public virtual Client Client { get; set; }


        public int mestoID { get; set; }
        public virtual Mesto Mesto { get; set; }


    }
}
