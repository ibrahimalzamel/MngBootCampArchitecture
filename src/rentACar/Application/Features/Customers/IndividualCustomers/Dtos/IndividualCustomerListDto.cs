﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.Customers.IndividualCustomers.Dtos
{
    public class IndividualCustomerListDto
    {
        
        public int Id { get; set; }
        public string Email { get; set; }    
        public string NationalId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}
