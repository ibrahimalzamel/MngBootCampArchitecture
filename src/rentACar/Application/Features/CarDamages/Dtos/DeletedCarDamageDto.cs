using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.CarDamages.Dtos
{
    public class DeletedCarDamageDto
    {
        public int Id { get; set; }
        public string CarModelBrandName { get; set; }
        public string CarModelName { get; set; }
    }
}
