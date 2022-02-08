using Application.Features.Customers.IndividualCustomers.Rules;
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

namespace Application.Features.Customers.IndividualCustomers.Commands.UpdateIndividualCustomer
{
    public class UpdateIndividualCustomerCommand : IRequest<IResult>
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public class UpdateIndividualCustomerCommandHnadler : IRequestHandler<UpdateIndividualCustomerCommand, IResult>
        {
            IIndividualCustomerRepository _individualCustomerRepository;
            IMapper _mapper;
            IndividualCustomerBusinessRules _individualCustomerBusinessRules;

            public UpdateIndividualCustomerCommandHnadler(IIndividualCustomerRepository individualCustomerRepository, IMapper mapper, IndividualCustomerBusinessRules individualCustomerBusinessRules)
            {
                _individualCustomerRepository = individualCustomerRepository;
                _mapper = mapper;
                _individualCustomerBusinessRules = individualCustomerBusinessRules;
            }

            public async Task<IResult> Handle(UpdateIndividualCustomerCommand request, CancellationToken cancellationToken)
            {
                var updateCar = await _individualCustomerRepository.GetAsync(c => c.Id == request.Id);
                if (updateCar == null) throw new BusinessException("Customer is not found");

                await _individualCustomerBusinessRules.NationalIdCanBotBeDublicated(request.Name);
                _mapper.Map(request, updateCar);
                await _individualCustomerRepository.UpdateAsync(updateCar);

                return new SuccessResult(SuccessMessages.CarUpdated);

            }
        }

    }
}
