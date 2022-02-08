using Application.Services.Repositories;
using AutoMapper;
using Core.CrossCuttingConcerns.Exceptions;
using Core.Utilities.Messages;
using Core.Utilities.Results;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.Invoices.Commands.DeleteInvoice
{
    public class DeleteInvoiceCommand : IRequest<IResult>
    {
        public int Id { get; set; }
        public class DeleteInvoiceCommandHandler : IRequestHandler<DeleteInvoiceCommand, IResult>
        {
            IInvoiceRepository _invoiceRepository;

            public DeleteInvoiceCommandHandler(IInvoiceRepository invoiceRepository)
            {
                _invoiceRepository = invoiceRepository;
            }

            public async Task<IResult> Handle(DeleteInvoiceCommand request, CancellationToken cancellationToken)
            {
                var deleteRental = await _invoiceRepository.GetAsync(r => r.Id == request.Id);
                if (deleteRental == null) throw new BusinessException("");

                await _invoiceRepository.DeleteAsync(deleteRental);
                return new SuccessResult(SuccessMessages.RentalUpdated);
            }
        }
    }
}
