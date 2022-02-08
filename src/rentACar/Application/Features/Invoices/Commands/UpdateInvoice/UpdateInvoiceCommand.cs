using Application.Features.Invoices.Rules;
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

namespace Application.Features.Invoices.Commands.UpdateInvoice
{
    public class UpdateInvoiceCommand :IRequest<IResult>
    {
        public int Id { get; set; }
        public string No { get; set; }

        public class UpdateInvoiceCommandHandler : IRequestHandler<UpdateInvoiceCommand,IResult>
        {
            IInvoiceRepository _invoiceRepository;
            IMapper _mapper;
            InvoiceBusinessRules _invoiceBusinessRules;
            public UpdateInvoiceCommandHandler(IInvoiceRepository invoiceRepository, IMapper mapper, InvoiceBusinessRules invoiceBusinessRules)
            {
                _invoiceRepository = invoiceRepository;
                _mapper = mapper;
                _invoiceBusinessRules = invoiceBusinessRules;
            }

            public async Task<IResult> Handle(UpdateInvoiceCommand request, CancellationToken cancellationToken)
            {
                var updateCar = await _invoiceRepository.GetAsync(c => c.Id == request.Id);
                if (updateCar == null) throw new BusinessException("Invoice is not found");

                await _invoiceBusinessRules.InvoiceNoCanNotBeDuplicatedWhenInserted(request.No);
                _mapper.Map(request, updateCar);
                await _invoiceRepository.UpdateAsync(updateCar);

                return new SuccessResult(SuccessMessages.CarUpdated);
            }
        }
    }
}
