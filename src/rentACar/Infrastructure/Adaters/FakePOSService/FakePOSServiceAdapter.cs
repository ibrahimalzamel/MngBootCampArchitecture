using Application.Services.POSService;
using Core.CrossCuttingConcerns.Exceptions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Adaters.FakePOSService
{
    public class FakePOSServiceAdapter : IPOSService
    {
        public Task Pay(string invoiceNo, decimal price)
        {
            Random random = new();
            bool result = Convert.ToBoolean(random.Next(2));
            if (!result) throw new BusinessException("Pay is not success-full.");
            return Task.CompletedTask;
        }
    }
}
