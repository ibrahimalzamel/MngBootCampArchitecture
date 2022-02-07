using Application.Features.Fuels.Rules;
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

namespace Application.Features.Fuels.Commands.DeleteFuel
{
    public class DeleteFuelCommand:IRequest<IResult>
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public class DeleteFuelCommandHandler : IRequestHandler<DeleteFuelCommand,IResult>
        {
            IFuelRepository _fuelRepository;
          

            public DeleteFuelCommandHandler(IFuelRepository fuelRepository)
            {
                _fuelRepository = fuelRepository;
            }

            public async Task<IResult> Handle(DeleteFuelCommand request, CancellationToken cancellationToken)
            {
                var deleteFuel = await _fuelRepository.GetAsync(f => f.Id == request.Id);
                if (deleteFuel == null) throw new BusinessException("Fuel is not found");

                await _fuelRepository.DeleteAsync(deleteFuel);
                return new SuccessResult(SuccessMessages.BrandDeleted);

               
            }
        }
    }
}
