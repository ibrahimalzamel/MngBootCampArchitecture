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

namespace Application.Features.Cars.Commands.DeleteCar
{
    public class DeleteCarCommand : IRequest<IResult>
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public class DeleteCarCommandHandler : IRequestHandler<DeleteCarCommand, IResult>
        {
            ICarRepository _carRepository;

            public DeleteCarCommandHandler(ICarRepository carRepository)
            {
                _carRepository = carRepository;
            
            }

            public async Task<IResult> Handle(DeleteCarCommand request, CancellationToken cancellationToken)
            {
               var deleteCar =  await _carRepository.GetAsync(c=>c.Id==request.Id);
                if (deleteCar==null)
                {
                    throw new BusinessException("Car cannot found");
                }
                await _carRepository.DeleteAsync(deleteCar);    
                return new SuccessResult(SuccessMessages.CarDeleted);

            }   
        }
    }
}
