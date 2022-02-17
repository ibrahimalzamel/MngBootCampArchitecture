using Application.Features.RentalBranches.Dtos;
using Core.Persistence.Paging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.RentalBranches.Models
{
    public class RentalBranchListModel : BasePageableModel
    {
        public IList<RentalBranchListDto> Items { get; set; }
    }
}