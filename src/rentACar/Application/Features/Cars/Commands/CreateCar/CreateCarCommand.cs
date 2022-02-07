using Application.Features.Cars.Rules;
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

namespace Application.Features.Cars.Commands.CreateCar
{
    public class CreateCarCommand : IRequest<IResult>
    {
        public string Plate { get; set; }
        public int ColorId { get; set; }
        public int ModelId { get; set; }
        public short ModelYear { get; set; }

        public class CreateCarCommandHandler : IRequestHandler<CreateCarCommand, IResult>
        {
            ICarRepository _carRepository;
            IMapper _mapper;
            CarBusinessRules _carBusinessRules;

            public CreateCarCommandHandler(ICarRepository carRepository, IMapper mapper, CarBusinessRules carBusinessRules)
            {
                _carRepository = carRepository;
                _mapper = mapper;
                _carBusinessRules = carBusinessRules;
            }
            public async Task<IResult> Handle(CreateCarCommand request, CancellationToken cancellationToken)
            {
                await _carBusinessRules.CarNameCanNotBeDuplicatedWhenInserted(request.Plate);
                await _carBusinessRules.ColorIsExist(request.ColorId);
                await _carBusinessRules.ModelIsExist(request.ModelId);
                var mappedCar = _mapper.Map<Car>(request);
                await _carRepository.AddAsync(mappedCar);
                return new SuccessResult(SuccessMessages.CarAdded);
            }
        }

    }
}

