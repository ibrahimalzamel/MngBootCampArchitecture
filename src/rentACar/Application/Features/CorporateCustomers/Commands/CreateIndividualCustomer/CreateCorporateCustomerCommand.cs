﻿using Application.Features.CorporateCustomers.Dtos;
using Application.Features.CorporateCustomers.Rules;
using Application.Services.Repositories;
using AutoMapper;
using Domain.Entities;
using MediatR;
using static Application.Features.CorporateCustomers.Constants.OperationClaims;
using static Domain.Constants.OperationClaims;

namespace Application.Features.CorporateCustomers.Commands.CreateCorporateCustomer;

public class CreateCorporateCustomerCommand : IRequest<CreatedCorporateCustomerDto>
{
    public int CustomerId { get; set; }
    public string CompanyName { get; set; }
    public string TaxNo { get; set; }
    public string[] Roles => new[] { Admin, CorporateCustomersAdd };


    public class
        CreateCorporateCustomerCommandHandler : IRequestHandler<CreateCorporateCustomerCommand,
            CreatedCorporateCustomerDto>
    {
        private readonly ICorporateCustomerRepository _corporateCustomerRepository;
        private readonly IMapper _mapper;
        private readonly CorporateCustomerBusinessRules _corporateCustomerBusinessRules;

        public CreateCorporateCustomerCommandHandler(ICorporateCustomerRepository corporateCustomerRepository,
                                                     IMapper mapper,
                                                     CorporateCustomerBusinessRules corporateCustomerBusinessRules)
        {
            _corporateCustomerRepository = corporateCustomerRepository;
            _mapper = mapper;
            _corporateCustomerBusinessRules = corporateCustomerBusinessRules;
        }

        public async Task<CreatedCorporateCustomerDto> Handle(CreateCorporateCustomerCommand request,
                                                              CancellationToken cancellationToken)
        {
            await _corporateCustomerBusinessRules.CorporateCustomerTaxNoCanNotBeDuplicatedWhenInserted(request.TaxNo);

            CorporateCustomer mappedCorporateCustomer = _mapper.Map<CorporateCustomer>(request);
            CorporateCustomer createdCorporateCustomer =
                await _corporateCustomerRepository.AddAsync(mappedCorporateCustomer);
            CreatedCorporateCustomerDto createdCorporateCustomerDto =
                _mapper.Map<CreatedCorporateCustomerDto>(createdCorporateCustomer);
            return createdCorporateCustomerDto;
        }
    }
}