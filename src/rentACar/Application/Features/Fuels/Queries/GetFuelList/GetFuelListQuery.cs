using Application.Features.Fuels.Models;
using Application.Services.Repositories;
using AutoMapper;
using Core.Application.Requests;
using Core.Utilities.DataResults;
using Core.Utilities.Messages;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.Fuels.Queries.GetFuelList
{
   // internal class GetFuelListQuery
    public class GetFuelListQuery : IRequest<IDataResult<FuelListModel>>
    {
        public PageRequest PageRequest { get; set; }

        public class GetFuelListQueryHandler : IRequestHandler<GetFuelListQuery, IDataResult<FuelListModel>>
        {
            IFuelRepository _fuelRepository;
            IMapper _mapper;

            public GetFuelListQueryHandler(IFuelRepository fuelRepository, IMapper mapper)
            {
                _fuelRepository = fuelRepository;
                _mapper = mapper;
            }

            public async Task<IDataResult<FuelListModel>> Handle(GetFuelListQuery request, CancellationToken cancellationToken)
            {
                var fuels = await _fuelRepository.GetListAsync(
                    index: request.PageRequest.Page,
                    size: request.PageRequest.PageSize);

                var mappedFuels = _mapper.Map<FuelListModel>(fuels);
                return new SuccessDataResult<FuelListModel>(mappedFuels, SuccessMessages.ColorListed);
            }
        }
    }
}

