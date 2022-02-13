using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Services.InvoiceService
{
    public interface IInvoiceService
    {
        public Task<Invoice> CreateInvoice(Rental rental, decimal modelDailyPrice);
        public Task<Invoice> Add(Invoice invoice);
    }
}
