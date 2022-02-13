using Application.Services.FindeksService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Adaters.FakeFindeksService
{
    public class FakeFindeksServiceAdapter : IFindeksService
    {
        public short GetScore(string identityNumber)
        {
            Random random = new();
            short score = Convert.ToInt16(random.Next(1900));
            return score;
        }
    }
}
