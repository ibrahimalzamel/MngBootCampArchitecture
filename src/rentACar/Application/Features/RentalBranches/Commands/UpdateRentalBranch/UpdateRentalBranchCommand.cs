using Application.Features.RentalBranches.Dtos;
using Application.Features.RentalBranchs.Rules;
using Application.Services.Repositories;
using AutoMapper;
using Core.CrossCuttingConcerns.Exceptions;
using Core.Utilities.Messages;
using Core.Utilities.Results;
using Domain.Entities;
using Domain.Enums;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.RentalBranchs.Commands.UpdateRentalBranch
{
    public class UpdateRentalBranchCommand : IRequest<UpdatedRentalBranchDto>
    {
        public int Id { get; set; }
        public City City { get; set; }

        public class UpdateRentalBranchCommandHandler : IRequestHandler<UpdateRentalBranchCommand, UpdatedRentalBranchDto>
        {
            private readonly IRentalBranchRepository _rentalBranchRepository;
            private readonly IMapper _mapper;
            private readonly RentalBranchBusinessRules _rentalBranchBusinessRules;

            public UpdateRentalBranchCommandHandler(IRentalBranchRepository rentalBranchRepository, IMapper mapper,
                                                    RentalBranchBusinessRules rentalBranchBusinessRules)
            {
                _rentalBranchRepository = rentalBranchRepository;
                _mapper = mapper;
                _rentalBranchBusinessRules = rentalBranchBusinessRules;
            }

            public async Task<UpdatedRentalBranchDto> Handle(UpdateRentalBranchCommand request,
                                                             CancellationToken cancellationToken)
            {
                RentalBranch mappedRentalBranch = _mapper.Map<RentalBranch>(request);
                RentalBranch updatedRentalBranch = await _rentalBranchRepository.UpdateAsync(mappedRentalBranch);
                UpdatedRentalBranchDto updatedRentalBranchDto = _mapper.Map<UpdatedRentalBranchDto>(updatedRentalBranch);
                return updatedRentalBranchDto;
            }
        }
    }
}
