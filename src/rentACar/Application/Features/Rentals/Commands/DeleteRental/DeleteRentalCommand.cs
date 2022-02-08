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

namespace Application.Features.Rentals.Commands.DeleteRental
{
    public class DeleteRentalCommand:IRequest<IResult>
    {
        public int Id { get; set; }
        public class DeleteRentalCommandHandler : IRequestHandler<DeleteRentalCommand,IResult>
        {
            IRentalRepository _rentalRepository;

            public DeleteRentalCommandHandler(IRentalRepository rentalRepository)
            {
                _rentalRepository = rentalRepository;
            }

            public async Task<IResult> Handle(DeleteRentalCommand request, CancellationToken cancellationToken)
            {
               var deleteRental =  await _rentalRepository.GetAsync(r => r.Id == request.Id);
                if (deleteRental == null) throw new BusinessException("");

                await _rentalRepository.DeleteAsync(deleteRental);
                return new SuccessResult(SuccessMessages.RentalDeleted);
            }
        }
    }
}
