using Application.Features.Brands.Dtos;
using Application.Features.Brands.Rules;
using Application.Services.Repositories;
using AutoMapper;
using Core.CrossCuttingConcerns.Exceptions;

using Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.Brands.Commands.UpdateBrand
{
    public class UpdateBrandCommand : IRequest<UpdatedBrandDto>
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public class UpdateBrandCommandHandler : IRequestHandler<UpdateBrandCommand, UpdatedBrandDto>
        {
            private IBrandRepository _brandRepository { get; }
            private IMapper _mapper { get; }

            public UpdateBrandCommandHandler(IBrandRepository brandRepository, IMapper mapper)
            {
                _brandRepository = brandRepository;
                _mapper = mapper;
            }

            public async Task<UpdatedBrandDto> Handle(UpdateBrandCommand request, CancellationToken cancellationToken)
            {
                Brand mappedBrand = _mapper.Map<Brand>(request);
                Brand updatedBrand = await _brandRepository.UpdateAsync(mappedBrand);
                UpdatedBrandDto updatedBrandDto = _mapper.Map<UpdatedBrandDto>(updatedBrand);
                return updatedBrandDto;
            }
        }
    }
}
