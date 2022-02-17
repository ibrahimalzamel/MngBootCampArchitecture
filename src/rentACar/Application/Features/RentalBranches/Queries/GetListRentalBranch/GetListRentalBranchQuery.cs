using Application.Features.RentalBranches.Models;
using Application.Services.Repositories;
using AutoMapper;
using Core.Application.Requests;
using Core.Persistence.Paging;
using Core.Utilities.DataResults;
using Core.Utilities.Messages;
using Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.RentalBranchs.Queries.GetRentalBranchList
{

    public class GetListRentalBranchQuery : IRequest<RentalBranchListModel>
    {
        public PageRequest PageRequest { get; set; }

        public class GetListRentalBranchQueryHandler : IRequestHandler<GetListRentalBranchQuery, RentalBranchListModel>
        {
            private readonly IRentalBranchRepository _rentalBranchRepository;
            private readonly IMapper _mapper;

            public GetListRentalBranchQueryHandler(IRentalBranchRepository rentalBranchRepository, IMapper mapper)
            {
                _rentalBranchRepository = rentalBranchRepository;
                _mapper = mapper;
            }

            public async Task<RentalBranchListModel> Handle(GetListRentalBranchQuery request,
                                                            CancellationToken cancellationToken)
            {
                IPaginate<RentalBranch> rentalBranchs = await _rentalBranchRepository.GetListAsync(
                                                            index: request.PageRequest.Page,
                                                            size: request.PageRequest.PageSize);
                RentalBranchListModel mappedRentalBranchListModel = _mapper.Map<RentalBranchListModel>(rentalBranchs);
                return mappedRentalBranchListModel;
            }
        }
    }
}
