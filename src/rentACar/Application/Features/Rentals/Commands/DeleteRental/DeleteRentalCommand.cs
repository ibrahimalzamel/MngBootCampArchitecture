using Application.Features.Rentals.Dtos;
using Application.Services.Repositories;
using AutoMapper;
using Core.Application.Pipelines.Authorization;
using Core.CrossCuttingConcerns.Exceptions;
using Core.Utilities.Messages;
using Core.Utilities.Results;
using Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Application.Features.Rentals.Constants.OperationClaims;
using static Domain.Constants.OperationClaims;

namespace Application.Features.Rentals.Commands.DeleteRental
{
    public class DeleteRentalCommand : IRequest<DeletedRentalDto>, ISecuredRequest
    {
        public int Id { get; set; }

        public string[] Roles => new[] { Admin, RentalDelete };

        public class DeleteRentalCommandHandler : IRequestHandler<DeleteRentalCommand, DeletedRentalDto>
        {
            private readonly IRentalRepository _rentalRepository;
            private readonly IMapper _mapper;

            public DeleteRentalCommandHandler(IRentalRepository rentalRepository, IMapper mapper)
            {
                _rentalRepository = rentalRepository;
                _mapper = mapper;
            }

            public async Task<DeletedRentalDto> Handle(DeleteRentalCommand request, CancellationToken cancellationToken)
            {
                Rental mappedRental = _mapper.Map<Rental>(request);
                Rental deletedRental = await _rentalRepository.DeleteAsync(mappedRental);
                DeletedRentalDto deletedRentalDto = _mapper.Map<DeletedRentalDto>(deletedRental);
                return deletedRentalDto;
            }
        }
    }
}
