using Application.Services.Repositories;
using Core.CrossCuttingConcerns.Exceptions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.Invoices.Rules
{
    public class InvoiceBusinessRules
    {
        IInvoiceRepository _invoiceRepository;

        public InvoiceBusinessRules(IInvoiceRepository invoiceRepository)
        {
            _invoiceRepository = invoiceRepository;
        }
        //Gerkhin dili 
        public async Task InvoiceIdCanNotBeDuplicatedWhenInserted(int id)
        {
            var result = await _invoiceRepository.GetListAsync(b => b.Id == id);
            if (result.Items.Any())
            {
                throw new BusinessException("Invoice Id exists");
            }
        }
        public async Task InvoiceNoCanNotBeDuplicatedWhenInserted(string no)
        {
            var result = await _invoiceRepository.GetListAsync(b => b.No== no);
            if (result.Items.Any())
            {
                throw new BusinessException("Invoice No exists");
            }
        }
    }
}
