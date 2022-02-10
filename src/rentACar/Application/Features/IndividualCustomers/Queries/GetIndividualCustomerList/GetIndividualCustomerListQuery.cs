using Application.Features.IndividualCustomers.Models;
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

namespace Application.Features.IndividualCustomers.Queries.GetIndividualCustomerList
{

    public class GetIndividualCustomerListQuery : IRequest<IndividualCustomerListModel>
    {
        public PageRequest PageRequest { get; set; }

        public class
            GetIndividualCustomerListQueryHandler : IRequestHandler<GetIndividualCustomerListQuery,
                IndividualCustomerListModel>
        {
            private readonly IIndividualCustomerRepository _individualCustomerRepository;
            private readonly IMapper _mapper;

            public GetIndividualCustomerListQueryHandler(IIndividualCustomerRepository individualCustomerRepository,
                                                         IMapper mapper)
            {
                _individualCustomerRepository = individualCustomerRepository;
                _mapper = mapper;
            }

            public async Task<IndividualCustomerListModel> Handle(GetIndividualCustomerListQuery request,
                                                                  CancellationToken cancellationToken)
            {
                IPaginate<IndividualCustomer> individualCustomers = await _individualCustomerRepository.GetListAsync(
                                                                        index: request.PageRequest.Page,
                                                                        size: request.PageRequest.PageSize);
                IndividualCustomerListModel mappedIndividualCustomerListModel =
                    _mapper.Map<IndividualCustomerListModel>(individualCustomers);
                return mappedIndividualCustomerListModel;
            }
        }
    }
}