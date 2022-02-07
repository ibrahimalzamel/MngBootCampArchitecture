using Core.Persistence.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public class Customer : Entity
    {
       
        public Customer()
        {
        }
        public Customer(int id,string email):this()
        {
            Email = email;
            Id = id;

        }

        public string Email { get; set; }
    }
}
