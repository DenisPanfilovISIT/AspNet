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
    public class OneclientController : Controller
    {
        private AppDBContent _db;//для всех операций нужна постоянная связь с бд, по другому не работает
        private readonly IClient _Client;
        public OneclientController(IClient client, AppDBContent db)
        {
            _Client = client;
            _db = db;
        }
        [HttpGet("[action]")]
        public IEnumerable<Client> GetClients()
        {
            var vyvod = _Client.Clients;
            return vyvod;

        }
        [HttpGet("[action]")]
        public Client getClient([FromQuery]int id)
        {
            var client = _Client.GetClient(id);
            return client;
        }
        [HttpPost("[action]")]
        public async Task<IActionResult> EditClient([FromBody]Client client)
        {
            var cl = _db.Client
                .Where(x => x.id == client.id)
                .FirstOrDefault();
            cl.name = client.name;
            cl.phone = client.phone;
            await _db.SaveChangesAsync();
            return Ok();
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> AddClient([FromBody]Client client)
        {
            _db.Client.Add(client);
            await _db.SaveChangesAsync();
            return Ok();
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> DeleteClient([FromBody]Client client)
        {
            var vyvod = _db.Client
                .Where(x => x.id == client.id)
                .FirstOrDefault();
            _db.Client.Remove(vyvod);
            await _db.SaveChangesAsync();
            return Ok();
        }
    }
}
