using Application.Features.Invoices.Dtos;
using Application.Features.Invoices.Rules;
using Application.Services.Repositories;
using AutoMapper;

using Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.Invoices.Commands.CreateInvoice
{
    public class CreateInvoiceCommand : IRequest<CreatedInvoiceDto>
    {

        public int CustomerId { get; set; }
        public string No { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime RentalStratDate { get; set; }
        public DateTime RentalEndDate { get; set; }
        public short TotalRentalDate { get; set; }
        public decimal RentalPrice { get; set; }
        public class CreateRentalCommandHandler : IRequestHandler<CreateInvoiceCommand, CreatedInvoiceDto>
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
            public async Task<CreatedInvoiceDto> Handle(CreateInvoiceCommand request, CancellationToken cancellationToken)
            {
                Invoice mappedInvoice = _mapper.Map<Invoice>(request);
                Invoice createdInvoice = await _rentalRepository.AddAsync(mappedInvoice);
                CreatedInvoiceDto createdInvoiceDto = _mapper.Map<CreatedInvoiceDto>(createdInvoice);
                return createdInvoiceDto;
            }
        }
    }
}

