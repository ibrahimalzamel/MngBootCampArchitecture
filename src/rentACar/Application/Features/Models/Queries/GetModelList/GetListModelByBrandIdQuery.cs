using Application.Features.Models.Models;
using Application.Features.Models.Rules;
using Application.Services.Repositories;
using AutoMapper;
using Core.Application.Requests;
using Core.Persistence.Paging;
using Domain.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.Models.Queries.GetModelList
{
    public class GetListModelByBrandIdQuery : IRequest<ModelListModel>
    {
        public PageRequest PageRequest { get; set; }
        public int brandId { get; set; }    
        //public bool BypassCache { get; set; }
        //public string CacheKey => "models-list";
        //public TimeSpan? SlidingExpiration { get; set; }

        public class GetListModelByBrandIdQueryHandler : IRequestHandler<GetListModelByBrandIdQuery, ModelListModel>
        {
            private readonly IModelRepository _modelRepository;
            private readonly IMapper _mapper;
            private readonly ModelBusinessRules _modelBusinessRules;
            public GetListModelByBrandIdQueryHandler(IModelRepository modelRepository, IMapper mapper, ModelBusinessRules modelBusinessRules)
            {
                _modelRepository = modelRepository;
                _mapper = mapper;
                _modelBusinessRules = modelBusinessRules;
            }

            public async Task<ModelListModel> Handle(GetListModelByBrandIdQuery request, CancellationToken cancellationToken)
            {
                await _modelBusinessRules.ModelBrandIdShouldExistWhenSelected(request.brandId);

                IPaginate<Model> models = await _modelRepository.GetListAsync(c=>c.BrandId==request.brandId,
                                                                              index: request.PageRequest.Page,
                                                                              size: request.PageRequest.PageSize
                                          );
                ModelListModel mappedModelListModel = _mapper.Map<ModelListModel>(models);
                return mappedModelListModel;
            }
        }
    }
}
