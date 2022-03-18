using Application.Features.CorporateCustomers.Models;
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

namespace Application.Features.CorporateCustomers.Queries.GetCorporateCustomerList
{

    public class GetCorporateCustomerListQuery : IRequest<CorporateCustomerListModel>
    {
        public PageRequest PageRequest { get; set; }

        public class
            GetCorporateCustomerListQueryHandler : IRequestHandler<GetCorporateCustomerListQuery,
                CorporateCustomerListModel>
        {
            private readonly ICorporateCustomerRepository _corporateCustomerRepository;
            private readonly IMapper _mapper;

            public GetCorporateCustomerListQueryHandler(ICorporateCustomerRepository corporateCustomerRepository,
                                                         IMapper mapper)
            {
                _corporateCustomerRepository = corporateCustomerRepository;
                _mapper = mapper;
            }

            public async Task<CorporateCustomerListModel> Handle(GetCorporateCustomerListQuery request,
                                                                  CancellationToken cancellationToken)
            {
                IPaginate<CorporateCustomer> corporateCustomers = await _corporateCustomerRepository.GetListAsync(
                                                                        index: request.PageRequest.Page,
                                                                        size: request.PageRequest.PageSize);
                CorporateCustomerListModel mappedCorporateCustomerListModel =
                    _mapper.Map<CorporateCustomerListModel>(corporateCustomers);
                return mappedCorporateCustomerListModel;
            }
        }
    }
}