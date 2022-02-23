using Domain.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.Cars.Dtos
{
    public class UpdatedCarDto
    {
        public int Id { get; set; }
        public int ColorId { get; set; }
        public int ModelId { get; set; }
        public string Plate { get; set; }
        public int RentalBranchId { get; set; }
        public int Kilometer { get; set; }
        public short ModelYear { get; set; }
        public CarState CarState { get; set; }
        public short MinFindeksCreditRate { get; set; }
    }
}
