using Application.Features.Customers.IndividualCustomers.Models;
using Application.Services.Repositories;
using AutoMapper;
using Core.Application.Requests;
using Core.Utilities.DataResults;
using Core.Utilities.Messages;
using Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.Customers.IndividualCustomers.Queries.GetIndividualCustomerList
{
  
    public class GetIndividualCustomerListQuery : IRequest<IDataResult<IndividualCustomerListModel>>
    {
        public PageRequest PageRequest { get; set; }

        public class GetIndividualCustomerListQueryHandler : IRequestHandler<GetIndividualCustomerListQuery, IDataResult<IndividualCustomerListModel>>
        {
            IIndividualCustomerRepository _individualCustomerRepository;
            IMapper _mapper;

            public GetIndividualCustomerListQueryHandler(IIndividualCustomerRepository individualCustomerRepository, IMapper mapper)
            {
                _individualCustomerRepository = individualCustomerRepository;
                _mapper = mapper;
            }
            public async Task<IDataResult<IndividualCustomerListModel>> Handle(GetIndividualCustomerListQuery request, CancellationToken cancellationToken)
            {
                var individualCustomers = await _individualCustomerRepository.GetListAsync(
                    index: request.PageRequest.Page,
                    size: request.PageRequest.PageSize);

                var mappedIndividualCustomers = _mapper.Map<IndividualCustomerListModel>(individualCustomers);
                return new SuccessDataResult<IndividualCustomerListModel>(mappedIndividualCustomers, SuccessMessages.CustomersListed);
            }
        }
    }
}
