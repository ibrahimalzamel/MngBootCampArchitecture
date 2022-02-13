using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Services.FindeksService
{
    public interface IFindeksService
    {
        short GetScore(string identityNumber);
    }
}
