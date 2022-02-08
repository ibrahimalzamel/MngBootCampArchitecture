using Application.Features.Models.Models;
using Application.Services.Repositories;
using AutoMapper;
using Core.Application.Requests;
using Core.Utilities.DataResults;
using Core.Utilities.Messages;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.Models.Queries.GetModelList
{
    public class GetModelListQuery : IRequest<IDataResult<ModelListModel>>
    {
        public PageRequest PageRequest { get; set; }

        public class GetModelListQueryHandler : IRequestHandler<GetModelListQuery, IDataResult<ModelListModel>>
        {
            IModelRepository _modelRepository;
            IMapper _mapper;

            public GetModelListQueryHandler(IModelRepository modelRepository, IMapper mapper)
            {
                _modelRepository = modelRepository;
                _mapper = mapper;
            }

            public async Task<IDataResult<ModelListModel>> Handle(GetModelListQuery request, CancellationToken cancellationToken)
            {
                var models = await _modelRepository.GetListAsync(
                    index: request.PageRequest.Page,
                    size: request.PageRequest.PageSize);

                var mappedModels = _mapper.Map<ModelListModel>(models);
                return new SuccessDataResult<ModelListModel>(mappedModels, SuccessMessages.BrandsListed);
            }
        }
    }
}

