using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Services.RentalsIAdditionalServiceService
{
    public interface IRentalsAdditionalServiceService
    {
        public Task<IList<RentalsAdditionalService>> AddManyByRentalIdAndAdditionalServices(int rentalId, IList<AdditionalService> additionalServices);
    }
}
