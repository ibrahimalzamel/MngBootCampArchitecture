using Application.Features.Cars.Dtos;
using Application.Features.Cars.Rules;
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

namespace Application.Features.Cars.Commands.DeleteCar
{
    public class DeleteCarCommand : IRequest<DeletedCarDto>
    {
        public int Id { get; set; }

        public class DeleteCarCommandHandler : IRequestHandler<DeleteCarCommand, DeletedCarDto>
        {
            private readonly ICarRepository _carRepository;
            private readonly IMapper _mapper;

            public DeleteCarCommandHandler(ICarRepository carRepository, IMapper mapper)
            {
                _carRepository = carRepository;
                _mapper = mapper;
            }

            public async Task<DeletedCarDto> Handle(DeleteCarCommand request, CancellationToken cancellationToken)
            {
                Car mappedCar = _mapper.Map<Car>(request);
                Car deletedCar = await _carRepository.DeleteAsync(mappedCar);
                DeletedCarDto deletedCarDto = _mapper.Map<DeletedCarDto>(deletedCar);
                return deletedCarDto;
            }
        }
    }
}
