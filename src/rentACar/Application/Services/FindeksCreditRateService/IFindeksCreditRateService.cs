using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Services.FindeksCreditRateService
{
    public interface IFindeksCreditRateService
    {
        public Task<FindeksCreditRate> GetFindeksCreditRateByCustomerId(int customerId);

        public Task<FindeksCreditRate> Add(FindeksCreditRate findeksCreditRate);
    }
}
