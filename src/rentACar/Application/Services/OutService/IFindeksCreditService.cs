using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Services.OutService
{
    public interface IFindeksCreditService
    {
        short AssignmentScore();
        short? IterationScore(DateTime customerCreateDate);
        short CalcScore(float? rate);
    }
}
