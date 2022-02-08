using Core.Persistence.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public class IndividualCustomer :Entity
    {
        public int CustomerId { get; set; }
        public string NationalId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public virtual Customer? Customer { get; set; }
        public IndividualCustomer()
        {
        }

        public IndividualCustomer(int id, int custmerId,string natianaId, string firstname, string lastName):base(id)
        {
            CustomerId = custmerId;
            NationalId = natianaId;
            FirstName = firstname;
            LastName = lastName;
        }
       
    }
}
