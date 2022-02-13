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

namespace Application.Features.Brands.Commands.DeleteBrand
{
    public class DeleteBrandCommand : IRequest<DeletedBrandDto>
    {
        public int Id { get; set; }

        public class DeleteBrandCommandHandler : IRequestHandler<DeleteBrandCommand, DeletedBrandDto>
        {
            private readonly IBrandRepository _brandRepository;
            private readonly IMapper _mapper;

            public DeleteBrandCommandHandler(IBrandRepository brandRepository, IMapper mapper)
            {
                _brandRepository = brandRepository;
                _mapper = mapper;
            }

            public async Task<DeletedBrandDto> Handle(DeleteBrandCommand request, CancellationToken cancellationToken)
            {
                Brand mappedBrand = _mapper.Map<Brand>(request);
                Brand deletedBrand = await _brandRepository.DeleteAsync(mappedBrand);
                DeletedBrandDto deletedBrandDto = _mapper.Map<DeletedBrandDto>(deletedBrand);
                return deletedBrandDto;
            }
        }
    }
}