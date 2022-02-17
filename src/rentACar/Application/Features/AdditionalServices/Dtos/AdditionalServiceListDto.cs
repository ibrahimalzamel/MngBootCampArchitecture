using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.AdditionalServices.Dtos
{
    public class AdditionalServiceListDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public decimal DailyPrice { get; set; }
    }
}
