using Application.Features.Customers.IndividualCustomers.Rules;
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

namespace Application.Features.Customers.IndividualCustomers.Commands.CreateIndividualCustomer
{
    public class CreateIndividualCustomerCommand : IRequest<IResult>
    {

        public string Email { get; set; }
        public string NationalId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public class CreateIndividualCustomerCommandHandlar : IRequestHandler<CreateIndividualCustomerCommand, IResult>
        {
            IIndividualCustomerRepository _individualCustomerRepository;
            IMapper _mapper;
            IndividualCustomerBusinessRules _individualCustomerBusinessRules;

            public CreateIndividualCustomerCommandHandlar(IIndividualCustomerRepository individualCustomerRepository, IMapper mapper, IndividualCustomerBusinessRules individualCustomerBusinessRules)
            {
                _individualCustomerRepository = individualCustomerRepository;
                _mapper = mapper;
                _individualCustomerBusinessRules = individualCustomerBusinessRules;
            }

            public async Task<IResult> Handle(CreateIndividualCustomerCommand request, CancellationToken cancellationToken)
            {
                await _individualCustomerBusinessRules.NationalIdCanBotBeDublicated(request.NationalId);

                var mappedIndividualCustomer = _mapper.Map<IndividualCustomer>(request);
                var createdIndividualCustomer = await _individualCustomerRepository.AddAsync(mappedIndividualCustomer);
                return new SuccessResult(SuccessMessages.CustomerAdded);

            }
        }
    }
}
