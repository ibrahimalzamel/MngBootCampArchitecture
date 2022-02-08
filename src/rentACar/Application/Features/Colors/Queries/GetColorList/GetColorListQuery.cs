﻿using Application.Features.Colors.Models;
using Application.Services.Repositories;
using AutoMapper;
using Core.Application.Requests;
using Core.Utilities.DataResults;
using Core.Utilities.Messages;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.Colors.Queries.GetColorList
{
    
    public class GetColorListQuery : IRequest<IDataResult<ColorListModel>>
    {
        public PageRequest PageRequest { get; set; }

        public class GetColorListQueryHandler : IRequestHandler<GetColorListQuery, IDataResult<ColorListModel>>
        {
            IColorRepository _colorRepository;
            IMapper _mapper;

            public GetColorListQueryHandler(IColorRepository colorRepository, IMapper mapper)
            {
                _colorRepository = colorRepository;
                _mapper = mapper;
            }

            public async Task<IDataResult<ColorListModel>> Handle(GetColorListQuery request, CancellationToken cancellationToken)
            {
                var colors = await _colorRepository.GetListAsync(
                    index: request.PageRequest.Page,
                    size: request.PageRequest.PageSize);

                var mappedColors = _mapper.Map<ColorListModel>(colors);
                return new SuccessDataResult<ColorListModel>(mappedColors,SuccessMessages.ColorListed);
            }
        }
    }
}