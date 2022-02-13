using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Services.POSService
{
    public interface IPOSService
    {
        Task Pay(string invoiceNo, decimal price); //todo: credit card etc.
    }
}
