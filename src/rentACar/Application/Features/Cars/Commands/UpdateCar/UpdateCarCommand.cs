using Application.Features.Cars.Rules;
using Application.Services.Repositories;
using AutoMapper;
using Core.CrossCuttingConcerns.Exceptions;
using Core.Utilities.Messages;
using Core.Utilities.Results;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.Cars.Commands.UpdateCar
{
    public class UpdateCarCommand : IRequest<IResult>
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public class UpdateCarCommandHnadler : IRequestHandler<UpdateCarCommand,IResult>
        {
            ICarRepository _carRepository;
            IMapper _mapper;
            CarBusinessRules _carBusinessRules;

            public UpdateCarCommandHnadler(ICarRepository carRepository, IMapper mapper, CarBusinessRules carBusinessRules)
            {
                _carRepository = carRepository;
                _mapper = mapper;
                _carBusinessRules = carBusinessRules;
            }

            public async Task<IResult> Handle(UpdateCarCommand request, CancellationToken cancellationToken)
            {
                var updateCar =  await _carRepository.GetAsync(c=>c.Id == request.Id);
                if (updateCar == null) throw new BusinessException("Car is not found");

               await _carBusinessRules.CarNameCanNotBeDuplicatedWhenInserted(request.Name);
               _mapper.Map( request,updateCar);
                await _carRepository.UpdateAsync(updateCar);

                return new SuccessResult(SuccessMessages.CarUpdated);

            }
        }

    }
}
