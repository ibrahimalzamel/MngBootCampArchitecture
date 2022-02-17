﻿using Application.Features.Models.Dtos;
using Application.Services.Repositories;
using AutoMapper;
using Core.Application.Pipelines.Caching;
using Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.Models.Commands.UpdateModel
{

    public class UpdateModelCommand : IRequest<UpdatedModelDto>, ICacheRemoverRequest
    {
        public int Id { get; set; }
        public int BrandId { get; set; }
        public int FuelId { get; set; }
        public int TransmissionId { get; set; }
        public string Name { get; set; }
        public decimal DailyPrice { get; set; }
        public string ImageUrl { get; set; }

        public bool BypassCache { get; }
        public string CacheKey => "models-list";

        public class UpdateModelCommandHandler : IRequestHandler<UpdateModelCommand, UpdatedModelDto>
        {
            private IModelRepository _modelRepository { get; }
            private IMapper _mapper { get; }

            public UpdateModelCommandHandler(IModelRepository modelRepository, IMapper mapper)
            {
                _modelRepository = modelRepository;
                _mapper = mapper;
            }

            public async Task<UpdatedModelDto> Handle(UpdateModelCommand request, CancellationToken cancellationToken)
            {
                Model mappedModel = _mapper.Map<Model>(request);
                Model updatedModel = await _modelRepository.UpdateAsync(mappedModel);
                UpdatedModelDto updatedModelDto = _mapper.Map<UpdatedModelDto>(updatedModel);
                return updatedModelDto;
            }
        }
    }
}
