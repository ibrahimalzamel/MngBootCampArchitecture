using Application.Features.AdditionalServices.Models;
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

namespace Application.Features.AdditionalServices.Queries.GetAdditionalServiceList
{

    public class GetListAdditionalServiceQuery : IRequest<AdditionalServiceListModel>
    {
        public PageRequest PageRequest { get; set; }

        public class GetListAdditionalServiceQueryHandler : IRequestHandler<GetListAdditionalServiceQuery, AdditionalServiceListModel>
        {
            private readonly IAdditionalServiceRepository _additionalServiceRepository;
            private readonly IMapper _mapper;

            public GetListAdditionalServiceQueryHandler(IAdditionalServiceRepository additionalServiceRepository, IMapper mapper)
            {
                _additionalServiceRepository = additionalServiceRepository;
                _mapper = mapper;
            }

            public async Task<AdditionalServiceListModel> Handle(GetListAdditionalServiceQuery request, CancellationToken cancellationToken)
            {
                IPaginate<AdditionalService> additionalServices = await _additionalServiceRepository.GetListAsync(index: request.PageRequest.Page,
                                                                              size: request.PageRequest.PageSize);
                AdditionalServiceListModel mappedAdditionalServiceListModel = _mapper.Map<AdditionalServiceListModel>(additionalServices);
                return mappedAdditionalServiceListModel;
            }
        }
    }
}
