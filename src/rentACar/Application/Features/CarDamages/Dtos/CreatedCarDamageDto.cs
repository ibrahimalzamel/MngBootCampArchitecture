using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.CarDamages.Dtos
{
    public class CreatedCarDamageDto
    {
        public int Id { get; set; }
        public int CarId { get; set; }
        public string DamageDescription { get; set; }
        public bool IsFixed { get; set; }
    }
}
