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

namespace Application.Features.Fuels.Commands.UpdateFuel
{

    public class UpdateFuelCommand : IRequest<IResult>
    {

        public int Id { get; set; }
        public string Name { get; set; }

        public class UpdateFuelCommandHandler : IRequestHandler<UpdateFuelCommand, IResult>
        {
            IFuelRepository _fuelRepository;
            FuelBusinessRules _fuelBusinessRules;
            IMapper _mapper;
            public UpdateFuelCommandHandler(IFuelRepository fuelRepository, FuelBusinessRules fuelBusinessRules, IMapper mapper)
            {
                _fuelRepository = fuelRepository;
                _fuelBusinessRules = fuelBusinessRules;
                _mapper = mapper;
            }

            public async Task<IResult> Handle(UpdateFuelCommand request, CancellationToken cancellationToken)
            {
                var updateFuel = await _fuelRepository.GetAsync(c => c.Id == request.Id);
                if (updateFuel == null) throw new BusinessException("fuel is not found");
                await _fuelBusinessRules.FuelNameCanNotBeDuplicatedWhenInserted(request.Name);
                _mapper.Map(request, updateFuel);
                await _fuelRepository.UpdateAsync(updateFuel);

                return new SuccessResult(SuccessMessages.ColorUpdate);
            }
        }
    }
}
