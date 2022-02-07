using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public class IndividualCustomer :Customer
    {
        public IndividualCustomer()
        {
        }

        public IndividualCustomer(int id,string email ,string natianaId, string firstname, string lastName):this()
        {
            Id = id;
            Email = email;
            NationalId = natianaId;
            FirstName = firstname;
            LastName = lastName;
        }

        public string NationalId { get; set; }
        public string FirstName{ get; set; }
        public string LastName{ get; set; }

    }
}
