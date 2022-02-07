using Application.Features.Colors.Rules;
using Application.Services.Repositories;
using AutoMapper;
using Core.Utilities.DataResults;
using Core.Utilities.Messages;
using Core.Utilities.Results;
using Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.Colors.Commands.CreateColor
{
   
    public class CreateColorCommand : IRequest<IResult>
    {
        public string Name { get; set; }
        public class CreateColorCommandHandler : IRequestHandler<CreateColorCommand, IResult>
        {
            IColorRepository _colorRepository;
            IMapper _mapper;
            ColorBusinessRules _colorBusinessRules;

            public CreateColorCommandHandler(IColorRepository colorRepository, IMapper mapper, ColorBusinessRules colorBusinessRules)
            {
                _colorRepository = colorRepository;
                _mapper = mapper;
                _colorBusinessRules = colorBusinessRules;
            }

            public async Task<IResult> Handle(CreateColorCommand request, CancellationToken cancellationToken)
            {
                await _colorBusinessRules.ColorNameCanNotBeDuplicatedWhenInserted(request.Name);
                var mappedColor = _mapper.Map<Color>(request);
                 await _colorRepository.AddAsync(mappedColor);
                return new SuccessResult(SuccessMessages.ColorAdded);
            }
        }

    }
}
