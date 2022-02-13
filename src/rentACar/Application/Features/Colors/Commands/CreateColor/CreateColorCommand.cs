using Application.Features.Colors.Dtos;
using Application.Features.Colors.Rules;
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

namespace Application.Features.Colors.Commands.CreateColor
{

    public class CreateColorCommand : IRequest<IResult>
    {


        public string Name { get; set; }

        public class CreateColorCommandHandler : IRequestHandler<CreateColorCommand, IResult>
        {
            private readonly IColorRepository _colorRepository;
            private readonly IMapper _mapper;
            private readonly ColorBusinessRules _colorBusinessRules;

            public CreateColorCommandHandler(IColorRepository colorRepository, IMapper mapper,
                                             ColorBusinessRules colorBusinessRules)
            {
                _colorRepository = colorRepository;
                _mapper = mapper;
                _colorBusinessRules = colorBusinessRules;
            }

            public async Task<IResult> Handle(CreateColorCommand request, CancellationToken cancellationToken)
            {
                //await _colorBusinessRules.ColorNameCanNotBeDuplicatedWhenInserted(request.Name);

                //Color mappedColor = _mapper.Map<Color>(request);
                //Color createdColor = await _colorRepository.AddAsync(mappedColor);
                //CreatedColorDto createdColorDto = _mapper.Map<CreatedColorDto>(createdColor);
                //return createdColorDto;
                //  var createColor = await _colorRepository.GetAsync(c => c.Name == request.Name);
                // if (createColor == null) throw new BusinessException("Color is not found");
                //  if (createColor == null)
                //    _mapper.Map(request, createColor);
                //await _colorRepository.AddAsync(createColor);
               
                await _colorBusinessRules.ColorNameCanNotBeDuplicatedWhenInserted(request.Name);
                Color mappedColor = _mapper.Map<Color>(request);
                 await _colorRepository.AddAsync(mappedColor);
                return new SuccessResult(SuccessMessages.ColorAdded);
            }
        }
    }
}
