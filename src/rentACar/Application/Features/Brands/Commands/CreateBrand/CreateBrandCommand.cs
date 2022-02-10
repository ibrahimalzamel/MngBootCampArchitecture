using Application.Features.Brands.Rules;
using Application.Services.Repositories;
using AutoMapper;
using Core.Application.Pipelines.Logging;
using Core.Mailing;
using Core.Utilities.Messages;
using Core.Utilities.Results;
using Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.Brands.Commands.CreateBrand
{
    public class CreateBrandCommand:IRequest<IResult>, ILoggableRequest
    { 
        public string Name { get; set; }
        public class CreateBrandCommandHandler:IRequestHandler<CreateBrandCommand, IResult>
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
            public async Task<IResult> Handle(CreateBrandCommand request, CancellationToken cancellationToken)
            {
              
                await _brandBusinessRules.BrandNameCanNotBeDuplicatedWhenInserted(request.Name);
                
                var mappedBrand = _mapper.Map<Brand>(request);
                await _brandRepository.AddAsync(mappedBrand);

                //var mail = new Mail
                //{
                //    ToFullName = "System admins",
                //    ToEmail ="admins@.com.tr",
                //    Subject ="New Brand Added",
                //    HtmlBody ="Hey , check the system"
                //};
                //_mailService.SendMail(mail);
                return new SuccessResult(SuccessMessages.BrandDeleted);
            }
        }
      
    }
}

//BTK C#  Design pattre