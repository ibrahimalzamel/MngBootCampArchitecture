using Application.Features.Brands.Dtos;
using Application.Features.Brands.Rules;
using Application.Services.Repositories;
using AutoMapper;
using Core.Application.Pipelines.Authorization;
using Core.CrossCuttingConcerns.Exceptions;

using Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Application.Features.Brands.Constants.OperationClaims;
using static Domain.Constants.OperationClaims;

namespace Application.Features.Brands.Commands.UpdateBrand
{
    public class UpdateBrandCommand : IRequest<UpdatedBrandDto>, ISecuredRequest
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public bool BypassCache { get; }
        public string CacheKey => "brands-list";
        public string[] Roles => new[] { Admin, BrandUpdate };

        public class UpdateBrandCommandHandler : IRequestHandler<UpdateBrandCommand, UpdatedBrandDto>
        {
            private IBrandRepository _brandRepository { get; }
            private IMapper _mapper { get; }
            private BrandBusinessRules _brandBusinessRules { get; }
            public UpdateBrandCommandHandler(IBrandRepository brandRepository, IMapper mapper, BrandBusinessRules brandBusinessRules)
            {
                _brandRepository = brandRepository;
                _mapper = mapper;
                _brandBusinessRules = brandBusinessRules;
            }

            public async Task<UpdatedBrandDto> Handle(UpdateBrandCommand request, CancellationToken cancellationToken)
            {
                await _brandBusinessRules.BrandNameCanNotBeDuplicatedWhenInserted(request.Name);
                Brand mappedBrand = _mapper.Map<Brand>(request);
                Brand updatedBrand = await _brandRepository.UpdateAsync(mappedBrand);
                UpdatedBrandDto updatedBrandDto = _mapper.Map<UpdatedBrandDto>(updatedBrand);
                return updatedBrandDto;
            }
        }
    }
}
