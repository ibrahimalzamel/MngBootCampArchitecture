using Domain.Entities;
using Domain.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.Cars.Dtos
{
    public class CarListDto
    {

      //  public string Plate { get; set; }

        public int Id { get; set; }
        public string BrandName { get; set; }
        public string ModelName { get; set; }
        public string FuelName { get; set; }
        public string ColorName { get; set; }
        public CarState CarState { get; set; }
        public short ModelYear { get; set; }
        public string Plate { get; set; }
        public City RentalBranchCity { get; set; }
        public int Kilometer { get; set; }
        public short MinFindeksCreditRate { get; set; }

    }
}
