using Application.Features.Invoices.Rules;
using Application.Services.Repositories;
using AutoMapper;
using Core.Utilities.Messages;
using Core.Utilities.Results;
using Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.Invoices.Commands.CreateInvoice
{
    public class CreateInvoiceCommand : IRequest<IResult>
    {

        public string No { get; set; }
        public class CreateRentalCommandHandler : IRequestHandler<CreateInvoiceCommand, IResult>
        {
            IInvoiceRepository _rentalRepository;
            IMapper _mapper;
            InvoiceBusinessRules _rentalBusinessRules;

            public CreateRentalCommandHandler(IInvoiceRepository rentalRepository, IMapper mapper, InvoiceBusinessRules rentalBusinessRules)
            {
                _rentalRepository = rentalRepository;
                _mapper = mapper;
                _rentalBusinessRules = rentalBusinessRules;
            }
            public async Task<IResult> Handle(CreateInvoiceCommand request, CancellationToken cancellationToken)
            {
                await _rentalBusinessRules.InvoiceNoCanNotBeDuplicatedWhenInserted(request.No);
                var mappedRental = _mapper.Map<Invoice>(request);
                await _rentalRepository.AddAsync(mappedRental);
                return new SuccessResult(SuccessMessages.CarAdded);
            }
        }

    }
}

