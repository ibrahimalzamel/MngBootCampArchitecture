﻿using Application.Features.RentalBranches.Dtos;
using Application.Features.RentalBranchs.Rules;
using Application.Services.Repositories;
using AutoMapper;
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

namespace Application.Features.RentalBranchs.Commands.CreateRentalBranch
{
    public class CreateRentalBranchCommand : IRequest<CreatedRentalBranchDto>
    {
        public City City { get; set; }

        public class CreateRentalBranchCommandHandler : IRequestHandler<CreateRentalBranchCommand, CreatedRentalBranchDto>
        {
            private readonly IRentalBranchRepository _rentalBranchRepository;
            private readonly IMapper _mapper;
            private readonly RentalBranchBusinessRules _rentalBranchBusinessRules;

            public CreateRentalBranchCommandHandler(IRentalBranchRepository rentalBranchRepository, IMapper mapper,
                                                    RentalBranchBusinessRules rentalBranchBusinessRules)
            {
                _rentalBranchRepository = rentalBranchRepository;
                _mapper = mapper;
                _rentalBranchBusinessRules = rentalBranchBusinessRules;
            }

            public async Task<CreatedRentalBranchDto> Handle(CreateRentalBranchCommand request,
                                                             CancellationToken cancellationToken)
            {
                RentalBranch mappedRentalBranch = _mapper.Map<RentalBranch>(request);
                RentalBranch createdRentalBranch = await _rentalBranchRepository.AddAsync(mappedRentalBranch);
                CreatedRentalBranchDto createdRentalBranchDto = _mapper.Map<CreatedRentalBranchDto>(createdRentalBranch);
                return createdRentalBranchDto;
            }
        }
    }
}

