using Application.Features.Transmissions.Models;
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

namespace Application.Features.Transmissions.Queries.GetTransmissionList
{
    public class GetTransmissionListQuery : IRequest<IDataResult<TransmissionListModel>>
    {
        public PageRequest PageRequest { get; set; }

        public class GetTransmissionListQueryHandler : IRequestHandler<GetTransmissionListQuery, IDataResult<TransmissionListModel>>
        {
            ITransmissionRepository _transmissionRepository;
            IMapper _mapper;

            public GetTransmissionListQueryHandler(ITransmissionRepository transmissionRepository, IMapper mapper)
            {
                _transmissionRepository =transmissionRepository;
                _mapper = mapper;
            }

            public async Task<IDataResult<TransmissionListModel>> Handle(GetTransmissionListQuery request, CancellationToken cancellationToken)
            {
                var fuels = await _transmissionRepository.GetListAsync(
                    index: request.PageRequest.Page,
                    size: request.PageRequest.PageSize);

                var mappedFuels = _mapper.Map<TransmissionListModel>(fuels);
                return new SuccessDataResult<TransmissionListModel>(mappedFuels, SuccessMessages.ColorListed);
            }
        }
    }
}

