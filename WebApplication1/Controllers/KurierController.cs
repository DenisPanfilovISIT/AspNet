using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Data.Interfaces;
using WebApplication1.Data.Models;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    public class KurierController : Controller
    {
        private AppDBContent _db;
        private readonly IStatus _Status;
        public KurierController(IStatus status, AppDBContent db)
        {
            _Status = status;
            _db = db;
        }
        [HttpGet("[action]")]
        public IEnumerable<Status> GetStatuses()
        {
            var vyvod = _Status.Statuses;
            return vyvod;

        }
        [HttpGet("[action]")]
        public Status GetStatus([FromQuery]int id)
        {
            var stat = _Status.GetStatus(id);
            return stat;
        }
        [HttpPost("[action]")]
        public async Task<IActionResult> EditStatus([FromBody]Status status)
        {
            var cl = _db.Status
                .Where(x => x.id == status.id)
                .FirstOrDefault();
            cl.nazv = status.nazv;
         
            await _db.SaveChangesAsync();
            return Ok();
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> AddStatus([FromBody]Status status)
        {
            _db.Status.Add(status);
            await _db.SaveChangesAsync();
            return Ok();
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> DeleteStatus([FromBody]Status status)
        {
            var vyvod = _db.Status
                .Where(x => x.id == status.id)
                .FirstOrDefault();
            _db.Status.Remove(vyvod);
            await _db.SaveChangesAsync();
            return Ok();
        }

    }
}
