using Application.Features.Customers.Models;
using Application.Services.Repositories;
using AutoMapper;
using Core.Application.Requests;
using Core.Persistence.Paging;
using Core.Utilities.DataResults;
using Core.Utilities.Messages;
using Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.Customers.Queries.GetCustomerList
{
    
    public class GetCustomerListQuery : IRequest<CustomerListModel>
    {
        public PageRequest PageRequest { get; set; }

        public class GetListCustomerQueryHandler : IRequestHandler<GetCustomerListQuery, CustomerListModel>
        {
            private readonly ICustomerRepository _customerRepository;
            private readonly IMapper _mapper;

            public GetListCustomerQueryHandler(ICustomerRepository customerRepository, IMapper mapper)
            {
                _customerRepository = customerRepository;
                _mapper = mapper;
            }

            public async Task<CustomerListModel> Handle(GetCustomerListQuery request, CancellationToken cancellationToken)
            {
                IPaginate<Customer> customers = await _customerRepository.GetListAsync(index: request.PageRequest.Page,
                                                    size: request.PageRequest.PageSize);
                CustomerListModel mappedCustomerListModel = _mapper.Map<CustomerListModel>(customers);
                return mappedCustomerListModel;
            }
        }
    }
}
