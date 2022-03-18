using Application.Features.Brands.Dtos;
using Application.Features.Brands.Rules;
using Application.Services.Repositories;
using AutoMapper;
using Core.Application.Pipelines.Authorization;
using Core.Application.Pipelines.Authorization;
using Core.Application.Pipelines.Caching;
using Core.Application.Pipelines.Logging;
using Core.Mailing;
using Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Application.Features.Brands.Constants.OperationClaims;
using static Domain.Constants.OperationClaims;

namespace Application.Features.Brands.Commands.CreateBrand
{
    public class CreateBrandCommand:IRequest<CreateBrandDto>
        , ISecuredRequest
      //, ILoggableRequest
        , ICacheRemoverRequest
    { 
        public string Name { get; set; }
        public bool BypassCache { get; }
        public string CacheKey => "brands-list";
        public string[] Roles => new[] { Admin, BrandAdd };
        public class CreateBrandCommandHandler:IRequestHandler<CreateBrandCommand, CreateBrandDto>
        {
            IBrandRepository _brandRepository;
            IMapper _mapper;
            BrandBusinessRules _brandBusinessRules;
            IMailService _mailService;
            public CreateBrandCommandHandler(IBrandRepository brandRepository, IMapper mapper, BrandBusinessRules brandBusinessRules, IMailService mailService)
            {
                _brandRepository = brandRepository;
                _mapper = mapper;
                _brandBusinessRules = brandBusinessRules;
                _mailService = mailService;
            }
            public async Task<CreateBrandDto> Handle(CreateBrandCommand request, CancellationToken cancellationToken)
            {
              
                await _brandBusinessRules.BrandNameCanNotBeDuplicatedWhenInserted(request.Name);

                Brand mappedBrand = _mapper.Map<Brand>(request);
                Brand createdBrand = await _brandRepository.AddAsync(mappedBrand);
                CreateBrandDto createdBrandDto = _mapper.Map<CreateBrandDto>(createdBrand);

                //var mail = new Mail
                //{
                //    ToFullName = "System admins",
                //    ToEmail ="admins@.com.tr",
                //    Subject ="New Brand Added",
                //    HtmlBody ="Hey , check the system"
                //};
                //_mailService.SendMail(mail);
                return createdBrandDto;
            }
        }
      
    }
}

//BTK C#  Design pattre