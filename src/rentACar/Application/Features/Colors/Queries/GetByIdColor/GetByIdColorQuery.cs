using Application.Features.Colors.Dtos;
using Application.Features.Colors.Rules;
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

namespace Application.Features.Colors.Queries.GetByIdColor
{
    public class GetByIdColorQuery : IRequest<ColorDto>
    {
        public int Id { get; set; }

        public class GetByIdColorQueryHandler : IRequestHandler<GetByIdColorQuery, ColorDto>
        {
            private readonly IColorRepository _colorRepository;
            private readonly IMapper _mapper;
            private readonly ColorBusinessRules _colorBusinessRules;

            public GetByIdColorQueryHandler(IColorRepository colorRepository, ColorBusinessRules colorBusinessRules,
                                            IMapper mapper)
            {
                _colorRepository = colorRepository;
                _colorBusinessRules = colorBusinessRules;
                _mapper = mapper;
            }


            public async Task<ColorDto> Handle(GetByIdColorQuery request, CancellationToken cancellationToken)
            {
              //  var color  =  await _colorBusinessRules.ColorIdShouldExistWhenSelected(request.Id);

                Color? color = await _colorRepository.GetAsync(c => c.Id == request.Id);
                if (color == null) throw  new BusinessException("Color name not exists.");
                ColorDto colorDto = _mapper.Map<ColorDto>(color);
                return colorDto;
            }
        }
    }
}
