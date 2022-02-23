﻿using Application.Features.Cars.Dtos;
using Application.Features.Cars.Rules;
using Application.Services.Repositories;
using AutoMapper;
using Core.Application.Pipelines.Authorization;
using Core.CrossCuttingConcerns.Exceptions;
using Domain.Entities;
using Domain.Enums;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Application.Features.Cars.Constants.OperationClaims;
using static Domain.Constants.OperationClaims;

namespace Application.Features.Cars.Commands.UpdateCar
{
    public class UpdateCarCommand : IRequest<UpdatedCarDto>, ISecuredRequest
    {
        public int ColorId { get; set; }
        public int ModelId { get; set; }
        public string Plate { get; set; }
        public int RentalBranchId { get; set; }
        public int Kilometer { get; set; }
        public short ModelYear { get; set; }
        public CarState CarState { get; set; }
        public short MinFindeksCreditRate { get; set; }
        public string[] Roles => new[] { Admin, CarUpdate };

        public class UpdateCarCommandHandler : IRequestHandler<UpdateCarCommand, UpdatedCarDto>
        {
            private ICarRepository _carRepository { get; }
            private IMapper _mapper { get; }

            public UpdateCarCommandHandler(ICarRepository carRepository, IMapper mapper)
            {
                _carRepository = carRepository;
                _mapper = mapper;
            }

            public async Task<UpdatedCarDto> Handle(UpdateCarCommand request, CancellationToken cancellationToken)
            {
                Car mappedCar = _mapper.Map<Car>(request);
                Car updatedCar = await _carRepository.UpdateAsync(mappedCar);
                UpdatedCarDto updatedCarDto = _mapper.Map<UpdatedCarDto>(updatedCar);
                return updatedCarDto;
            }
        }
    }
}
