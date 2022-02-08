using Application.Services.Repositories;
using Core.CrossCuttingConcerns.Exceptions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.Rentals.Rules
{
    public class RentalBusinessRules
    {
        IRentalRepository _rentalRepository;

        public RentalBusinessRules(IRentalRepository rentalRepository)
        {
            _rentalRepository = rentalRepository;
        }
        //Gerkhin dili 
        public async Task RentalIdCanNotBeDuplicatedWhenInserted(int id)
        {
            var result = await _rentalRepository.GetListAsync(b => b.Id == id);
            if (result.Items.Any())
            {
                throw new BusinessException("Rental Id exists");
            }
        }
        public async Task RentalCarIdCanNotBeDuplicatedWhenInserted(int carId)
        {
            var result = await _rentalRepository.GetListAsync(b => b.CarId== carId);
            if (result.Items.Any())
            {
                throw new BusinessException("Rental Car Id exists");
            }
        }
    }
}
