using Application.Features.FindeksCreditRates.Dtos;
using Core.Persistence.Paging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.FindeksCreditRates.Models
{
    public class FindeksCreditRateListModel : BasePageableModel
    {
        public IList<FindeksCreditRateListDto> Items { get; set; }
    }
}
