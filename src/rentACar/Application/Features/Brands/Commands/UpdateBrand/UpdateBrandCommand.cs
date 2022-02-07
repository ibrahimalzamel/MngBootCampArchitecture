using Application.Features.Brands.Dtos;
using Application.Features.Brands.Rules;
using Application.Services.Repositories;
using AutoMapper;
using Core.CrossCuttingConcerns.Exceptions;
using Core.Utilities.Messages;
using Core.Utilities.Results;
using Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.Brands.Commands.UpdateBrand
{
    public class UpdateBrandCommand : IRequest<IResult>
    {
        public int Id { get; set;}
        public string Name { get; set;}

        public class UpdateBrandCommandHandler : IRequestHandler<UpdateBrandCommand, IResult>
        {
            IBrandRepository _brandRepository;
            IMapper _mapper;
            BrandBusinessRules _brandBusinessRules;

            public UpdateBrandCommandHandler(IBrandRepository brandrepository, IMapper mapper, BrandBusinessRules brandBusinessRules)
            {
                _brandRepository = brandrepository;
                _mapper = mapper;
                _brandBusinessRules = brandBusinessRules;
            }

            public async Task<IResult> Handle(UpdateBrandCommand request, CancellationToken cancellationToken)
            {
                var updatedBrand = await _brandRepository.GetAsync(x => x.Id == request.Id);
                if (updatedBrand == null)  throw new BusinessException("Brand cannot found");
             
                await _brandBusinessRules.BrandNameCanNotBeDuplicatedWhenInserted(request.Name);
                _mapper.Map(request, updatedBrand);
                await _brandRepository.UpdateAsync(updatedBrand);              
                return new SuccessResult(SuccessMessages.BrandUpdate);

            }
        }
    }
}
