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
    public class DeleteBrandCommand : IRequest<Brand>
    {
        public int Id { get; set; }
        public class DeleteBrandCommandHandler : IRequestHandler<DeleteBrandCommand, Brand>
        {
            IBrandRepository _brandRepository;
            IMapper _mapper;
            BrandBusinessRules _brandBusinessRules;
            public DeleteBrandCommandHandler(IBrandRepository brandRepository, IMapper mapper, BrandBusinessRules brandBusinessRules )
            {
                _brandRepository = brandRepository;
                _mapper = mapper;
                _brandBusinessRules = brandBusinessRules;
            }

            public async Task<Brand> Handle(DeleteBrandCommand request, CancellationToken cancellationToken)
            {
               
                var deleteBrand =  await _brandRepository.GetAsync(b=>b.Id == request.Id);
                if (deleteBrand == null)
                       throw new BusinessException("Brand cannot found");
                
                var deletedBrand = await _brandRepository.DeleteAsync(deleteBrand);
                return deletedBrand;


            }
        }
    }
}
