using Application.Services.Repositories;
using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Services.InvoiceService
{
    public class InvoiceManager : IInvoiceService
    {
        private readonly IInvoiceRepository _invoiceRepository;

        public InvoiceManager(IInvoiceRepository invoiceRepository)
        {
            _invoiceRepository = invoiceRepository;
        }

        public async Task<Invoice> Add(Invoice invoice)
        {
            Invoice createdInvoice = await _invoiceRepository.AddAsync(invoice);
            return createdInvoice;
        }

        public Task<Invoice> CreateInvoice(Rental rental, decimal dailyPrice)
        {
            short totalRentalDate = Convert.ToInt16(rental.RentEndDate.Day - rental.RentStartDate.Day > 0
                                                        ? rental.RentEndDate.Day - rental.RentStartDate.Day
                                                        : 1);

            decimal rentalPrice = Convert.ToDecimal(dailyPrice * totalRentalDate);
            if (rental.RentStartRentalBranchId != rental.RentEndRentalBranchId) rentalPrice += 500;

            Invoice newInvoice = new()
            {
                CustomerId = rental.CustomerId,
                No = Guid.NewGuid().ToString(),
                RentalStratDate = rental.RentStartDate,
                RentalEndDate = rental.RentEndDate,
                TotalRentalDate = totalRentalDate,
                RentalPrice = rentalPrice
            };
            return Task.FromResult(newInvoice);
        }
    }
}
