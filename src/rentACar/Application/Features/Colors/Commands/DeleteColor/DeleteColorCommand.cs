﻿using Application.Features.Colors.Dtos;
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

namespace Application.Features.Colors.Commands.DeleteColor
{



    public class DeleteColorCommand : IRequest<DeletedColorDto>
    {
        public int Id { get; set; }

        public class DeleteColorCommandHandler : IRequestHandler<DeleteColorCommand, DeletedColorDto>
        {
            private readonly IColorRepository _colorRepository;
            private readonly IMapper _mapper;

            public DeleteColorCommandHandler(IColorRepository colorRepository, IMapper mapper)
            {
                _colorRepository = colorRepository;
                _mapper = mapper;
            }

            public async Task<DeletedColorDto> Handle(DeleteColorCommand request, CancellationToken cancellationToken)
            {
                Color mappedColor = _mapper.Map<Color>(request);
                Color updatedColor = await _colorRepository.DeleteAsync(mappedColor);
                DeletedColorDto deletedColorDto = _mapper.Map<DeletedColorDto>(updatedColor);
                return deletedColorDto;
            }
        }
    }
}
