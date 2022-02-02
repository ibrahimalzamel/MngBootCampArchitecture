﻿using Application.Features.Transmissions.Rules;
using Application.Services.Repositories;
using AutoMapper;
using Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.Transmissions.Commands.CreateTransmission
{
    //Transmission
    public class CreateTransmissionCommand : IRequest<Transmission>
    {
        public string Name { get; set; }
        public class CreateTransmissionCommandHandler : IRequestHandler<CreateTransmissionCommand, Transmission>
        {
            ITransmissionRepository _transmissionRepository;
            IMapper _mapper;
            TransmissionBusinessRules _transmissionBusinessRules;

            public CreateTransmissionCommandHandler(ITransmissionRepository transmissionRepository, IMapper mapper, TransmissionBusinessRules transmissionBusinessRules)
            {
                _transmissionRepository = transmissionRepository;
                _mapper = mapper;
                _transmissionBusinessRules = transmissionBusinessRules;
            }
            public async Task<Transmission> Handle(CreateTransmissionCommand request, CancellationToken cancellationToken)
            {
                await _transmissionBusinessRules.TransmissionNameCanNotBeDuplicatedWhenInserted(request.Name);
                var mappedTransmission = _mapper.Map<Transmission>(request);

                var createTransmission = await _transmissionRepository.AddAsync(mappedTransmission);
                return createTransmission;
            }
        }
    }
}
