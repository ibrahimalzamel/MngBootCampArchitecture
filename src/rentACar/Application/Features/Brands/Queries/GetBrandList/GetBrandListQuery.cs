using Application.Features.Brands.Models;
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

namespace Application.Features.Brands.Queries.GetBrandList
{
    public class GetBrandListQuery : IRequest<IDataResult<BrandListModel>>
    {
        public PageRequest PageRequest { get; set; }

        public class GetBrandListQueryHandler : IRequestHandler<GetBrandListQuery, IDataResult<BrandListModel>>
        {
            IBrandRepository _brandRepository;
            IMapper _mapper;

            public GetBrandListQueryHandler(IBrandRepository brandRepository, IMapper mapper)
            {
                _brandRepository = brandRepository;
                _mapper = mapper;
            }
            public async Task <IDataResult<BrandListModel>> Handle(GetBrandListQuery request, CancellationToken cancellationToken)
            {
                var brands = await _brandRepository.GetListAsync(
                    index: request.PageRequest.Page,
                    size: request.PageRequest.PageSize);

                var mappedBrands = _mapper.Map<BrandListModel>(brands);
                return new SuccessDataResult<BrandListModel>(mappedBrands,SuccessMessages.BrandsListed);
            }
        }
    }
}
