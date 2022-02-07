using Application.Features.Fuels.Rules;
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

namespace Application.Features.Fuels.Commands.CreateFuel
{
    public class CreateFuelCommand : IRequest<IResult>
    {
        public string Name { get; set; }
        public class CreateFuelCommandHandler : IRequestHandler<CreateFuelCommand, IResult>
        {
            IFuelRepository _fuelRepository;
            IMapper _mapper;
            FuelBusinessRules _fuelBusinessRules;

            public CreateFuelCommandHandler(IFuelRepository fuelRepository, IMapper mapper, FuelBusinessRules fuelBusinessRules)
            {
                _fuelRepository = fuelRepository;
                _mapper = mapper;
                _fuelBusinessRules = fuelBusinessRules;
            }
            public async Task<IResult> Handle(CreateFuelCommand request, CancellationToken cancellationToken)
            {
                await _fuelBusinessRules.FuelNameCanNotBeDuplicatedWhenInserted(request.Name);
                var mappedFuel = _mapper.Map<Fuel>(request);

                 await _fuelRepository.AddAsync(mappedFuel);
                return new SuccessResult(SuccessMessages.BrandAdded);
            }
        }
    }
}
