using FastMember;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using OfficeOpenXml;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Data.Interfaces;
using WebApplication1.Data.Models;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    public class ZakazController : Controller
    {
        private AppDBContent _db;
        private readonly IOrder _Order;
        public ZakazController(IOrder order, AppDBContent db)
        {
            _Order = order;
            _db = db;
        }
        [HttpGet("[action]")]
        public IEnumerable<Order> GetOrders()
        {
            var vyvod = _Order.Orders;
            return vyvod;

        }

        public class Zakaz
        {
            public string name { get; set; }
            public string phone { get; set; }
            public string nazvulica { get; set; }
            //public string nazvstatus { get; set; }
            public string house { get; set; }
            public DateTime dateor { get; set; }
            public decimal summa { get; set; }
            public int statusID { get; set; }

            public int mestoID { get; set; }



        }

        [HttpPost("[action]")]
        public async Task<IActionResult> AddOrder([FromBody]Zakaz order)
        {
            Client client = new Client
            {
                name = order.name,
                phone = order.phone
            };
            _db.Client.Add(client);
            await _db.SaveChangesAsync();

            Status status = _db.Status
                .FirstOrDefault(x => x.id == order.statusID);
            Mesto mesto = _db.Mesto
               .FirstOrDefault(x => x.id == order.mestoID);


            Order orders = new Order
            {
                
                dateor = DateTime.Now,
                summa = 2735,
                Status = status,
                Client = client,
                Mesto = mesto
            };
            _db.Order.Add(orders);
            await _db.SaveChangesAsync();
            return Ok();
        }

        [HttpGet("[action]")]
        public Order GetOrder([FromQuery]int id)
        {
            var order = _Order.GetOrder(id);
            return order;
        }

        [HttpGet("[action]")]
        public IActionResult ExportExcel()
        {
            var zakazy = _Order.Orders.Select(x => new
            {
                Номер = x.id,
                Дата__Заказа = x.dateor.ToShortDateString(),
                Время_Заказа = x.dateor.ToShortTimeString(),
                Сумма = x.summa,
                Статус = x.Status.nazv,
                Клиент = x.Client.name,
                Улица = x.Mesto.Ulica.nazv,
                Дом = x.Mesto.house
            });

            DataTable dt = new DataTable();
            using (var reader = ObjectReader.Create(zakazy))
            {
                dt.Load(reader);
            }

            byte[] fileContents;
            using (var package = new ExcelPackage())
            {
                var workSheet = package.Workbook.Worksheets.Add("Заказы");
                workSheet.Cells["A1"].LoadFromDataTable(dt, true);
                fileContents = package.GetAsByteArray();
            }
            if (fileContents == null || fileContents.Length == 0)
            {
                return null;
            }
            return File(
                fileContents: fileContents,
                contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                fileDownloadName: "Заказы.xlsx"
                );
        }
    }
}
