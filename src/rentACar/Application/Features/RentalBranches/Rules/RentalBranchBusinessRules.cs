using Application.Services.Repositories;
using Core.CrossCuttingConcerns.Exceptions;
using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.RentalBranchs.Rules
{
    public class RentalBranchBusinessRules
    {
        private readonly IRentalBranchRepository _rentalBranchRepository;

        public RentalBranchBusinessRules(IRentalBranchRepository rentalBranchRepository)
        {
            _rentalBranchRepository = rentalBranchRepository;
        }

        public async Task RentalBranchIdShouldExistWhenSelected(int id)
        {
            RentalBranch? result = await _rentalBranchRepository.GetAsync(b => b.Id == id);
            if (result == null) throw new BusinessException("RentalBranch not exists.");
        }
    }
}
