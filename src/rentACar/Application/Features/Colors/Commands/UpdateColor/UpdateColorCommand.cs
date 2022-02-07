using Application.Features.Colors.Rules;
using Application.Services.Repositories;
using AutoMapper;
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
    
    public class UpdateColorCommand : IRequest<Color>
    {

        public int Id { get; set; }
        public string Name { get; set; }    

        public class UpdateColorCommandHandler : IRequestHandler<UpdateColorCommand, Color>
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

            public async Task<Color> Handle(UpdateColorCommand request, CancellationToken cancellationToken)
            {
                //var updateToColor = await _colorRepository.GetAsync(c => c.Id == request.Id);
                //if (updateToColor == null)
                //    return new ErrorResult(ErrorMessages.ColorNameAlreadyExistsError);
                //Color mappedColor =   _mapper.Map<Color>(request);
                //await _colorRepository.UpdateAsync(mappedColor);
                //return new SuccessResult(SuccessMessages.ColorUpdate);

                await _colorBusinessRules.ColorNameCanNotBeDuplicatedWhenInserted(request.Name);
                var mappedColor =  _mapper.Map<Color>(request);
                var updateColor =  await _colorRepository.UpdateAsync(mappedColor);

               // _mapper.Map(request, updateToColor); 
                
             
                return updateColor;
            }
        }

    }
}
