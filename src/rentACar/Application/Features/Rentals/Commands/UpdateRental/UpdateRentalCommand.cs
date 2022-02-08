using Application.Features.Rentals.Rules;
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

namespace Application.Features.Rentals.Commands.UpdateRental
{
    public class UpdateRentalCommand : IRequest<IResult>
    {
        public int Id { get; set; }
        public int  CarId { get; set; }

        public class UpdateRentalCommandHandler : IRequestHandler<UpdateRentalCommand, IResult>
        {
            IRentalRepository _rentalRepository;
            IMapper _mapper;
            RentalBusinessRules _rentalBusinessRules;
            public UpdateRentalCommandHandler(IRentalRepository rentalRepository, IMapper mapper, RentalBusinessRules rentalBusinessRules)
            {
                _rentalRepository = rentalRepository;
                _mapper = mapper;
                _rentalBusinessRules = rentalBusinessRules;
            }

            public async Task<IResult> Handle(UpdateRentalCommand request, CancellationToken cancellationToken)
            {
                var updateRental = await _rentalRepository.GetAsync(c => c.Id == request.Id);
                if (updateRental == null) throw new BusinessException("Rental is not found");

                await _rentalBusinessRules.RentalCarIdCanNotBeDuplicatedWhenInserted(request.CarId);
                _mapper.Map(request, updateRental);
                await _rentalRepository.UpdateAsync(updateRental);

                return new SuccessResult(SuccessMessages.CarUpdated);
            }
        }
    }
}
