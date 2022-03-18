using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Services.RentalService
{

    public interface IRentalService
    {
        Task<IList<Rental>> GetAllByInDates(int carId, DateTime rentStartDate, DateTime rentEndDate);
    }
}
