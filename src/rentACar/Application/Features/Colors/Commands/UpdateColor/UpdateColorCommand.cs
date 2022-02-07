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

namespace Application.Features.Colors.Commands.UpdateColor
{
    
    public class UpdateColorCommand : IRequest<IResult>
    {

        public int Id { get; set; }
        public string Name { get; set; }    

        public class UpdateColorCommandHandler : IRequestHandler<UpdateColorCommand, IResult>
        {
            IColorRepository _colorRepository;
            ColorBusinessRules _colorBusinessRules;
            IMapper _mapper;
            public UpdateColorCommandHandler(IColorRepository colorRepository, ColorBusinessRules colorBusinessRules, IMapper mapper)
            {
                _colorRepository = colorRepository;
                _colorBusinessRules = colorBusinessRules;
                _mapper = mapper;
            }

            public async Task<IResult> Handle(UpdateColorCommand request, CancellationToken cancellationToken)
            {
                var updateColor = await _colorRepository.GetAsync(c => c.Id == request.Id);
                if (updateColor == null) throw new BusinessException("Color is not found");
                await _colorBusinessRules.ColorNameCanNotBeDuplicatedWhenInserted(request.Name);
                _mapper.Map(request,updateColor);           
                await _colorRepository.UpdateAsync(updateColor);

                return new SuccessResult(SuccessMessages.ColorUpdate);
            }
        }

    }
}
