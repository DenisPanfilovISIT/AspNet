using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Data.Interfaces;
using WebApplication1.Data.Models;

namespace WebApplication1.Data.Repository
{
    public class EmployeeRepository : IEmployee
    {
        private readonly AppDBContent appDBContent;

        public EmployeeRepository(AppDBContent appDBContent)
        {
            this.appDBContent = appDBContent;
        }

        public IEnumerable<Employee> Employees => appDBContent.Employee;

        public Employee getEmployee(int id)
        {
            return appDBContent.Employee.FirstOrDefault(x => x.id == id);
        }
    }
}
