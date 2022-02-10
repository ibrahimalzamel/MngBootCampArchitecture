﻿using Application.Features.CarDamages.Dtos;
using Application.Features.CarDamages.Rules;
using Application.Services.Repositories;
using AutoMapper;
using Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.CarDamages.Queries.GetByIdCarDamage
{
    public class GetByIdCarDamageQuery : IRequest<UserDto>
    {
        public int Id { get; set; }

        public class GetByIdCarDamageQueryHandler : IRequestHandler<GetByIdCarDamageQuery, UserDto>
        {
            private readonly ICarDamageRepository _carDamageRepository;
            private readonly IMapper _mapper;
            private readonly CarDamageBusinessRules _carDamageBusinessRules;

            public GetByIdCarDamageQueryHandler(ICarDamageRepository carDamageRepository,
                                                CarDamageBusinessRules carDamageBusinessRules, IMapper mapper)
            {
                _carDamageRepository = carDamageRepository;
                _carDamageBusinessRules = carDamageBusinessRules;
                _mapper = mapper;
            }


            public async Task<UserDto> Handle(GetByIdCarDamageQuery request, CancellationToken cancellationToken)
            {
                await _carDamageBusinessRules.CarDamageIdShouldExistWhenSelected(request.Id);

                CarDamage? carDamage = await _carDamageRepository.GetAsync(b => b.Id == request.Id);
                UserDto carDamageDto = _mapper.Map<UserDto>(carDamage);
                return carDamageDto;
            }
        }
    }
}