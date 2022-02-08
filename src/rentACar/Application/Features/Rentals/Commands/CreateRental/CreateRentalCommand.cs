using Application.Features.Rentals.Rules;
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

namespace Application.Features.Rentals.Commands.CreateRental
{
    public class CreateRentalCommand : IRequest<IResult>
    {

        public int CarId { get; set; }
        public class CreateRentalCommandHandler : IRequestHandler<CreateRentalCommand, IResult>
        {
            IRentalRepository _rentalRepository;
            IMapper _mapper;
            RentalBusinessRules _rentalBusinessRules;

            public CreateRentalCommandHandler(IRentalRepository rentalRepository, IMapper mapper, RentalBusinessRules rentalBusinessRules)
            {
                _rentalRepository = rentalRepository;
                _mapper = mapper;
                _rentalBusinessRules = rentalBusinessRules;
            }
            public async Task<IResult> Handle(CreateRentalCommand request, CancellationToken cancellationToken)
            {
                await _rentalBusinessRules.RentalCarIdCanNotBeDuplicatedWhenInserted(request.CarId);
                var mappedRental = _mapper.Map<Rental>(request);
                await _rentalRepository.AddAsync(mappedRental);
                return new SuccessResult(SuccessMessages.CarAdded);
            }
        }

    }
}

