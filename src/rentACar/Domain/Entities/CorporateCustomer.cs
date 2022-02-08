using Core.Persistence.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public class CorporateCustomer : Entity
    {
        public CorporateCustomer()
        {
        }

        public CorporateCustomer(int id , int customerId ,string taxNumber, string companyName):base(id)
        {
            CustomerId = customerId;    
            TaxNumber = taxNumber;
            CompanyName = companyName;
        }

        //tax number
        public int CustomerId { get; set; }
        public string TaxNumber { get; set; }
        public string CompanyName { get; set; }
        public virtual Customer? Customer { get; set; }


    }
}
