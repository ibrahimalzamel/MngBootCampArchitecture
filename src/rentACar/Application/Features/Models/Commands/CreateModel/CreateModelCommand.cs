using Application.Features.Models.Rules;
using Application.Services.Repositories;
using AutoMapper;
using Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.Models.Commands.CreateModel
{
   
    public class CreateModelCommand : IRequest<Model>
    {
        public string Name { get; set; }
        public class CreateModelCommandHandler : IRequestHandler<CreateModelCommand, Model>
        {
            IModelRepository _modelRepository;
            IMapper _mapper;
            ModelBusinessRules _modelBusinessRules;

           
            public CreateModelCommandHandler(IModelRepository modelRepository, IMapper mapper, ModelBusinessRules modelBusinessRules)
            {
                _modelRepository = modelRepository;
                _mapper = mapper;
                _modelBusinessRules = modelBusinessRules;
            }
            public async Task<Model> Handle(CreateModelCommand request, CancellationToken cancellationToken)
            {
                await _modelBusinessRules.ModelNameCanNotBeDuplicatedWhenInserted(request.Name);
                var mappedModel = _mapper.Map<Model>(request);

                var createModel = await _modelRepository.AddAsync(mappedModel);
                return createModel;
            }
        }
    }
}
