using Application.Services.Repositories;
using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Services.RentalService
{
    public class RentalManager : IRentalService
    {
        private readonly IRentalRepository _rentalRepository;

        public RentalManager(IRentalRepository rentalRepository)
        {
            _rentalRepository = rentalRepository;
        }

        public async Task<IList<Rental>> GetAllByInDates(int carId, DateTime rentStartDate, DateTime rentEndDate)
        {
            IList<Rental> rentals = (await _rentalRepository.GetListAsync(
                                         r => r.CarId == carId && r.RentEndDate >= rentStartDate &&
                                              r.RentStartDate <= rentEndDate)).Items;
            return rentals;
        }
    }
}
