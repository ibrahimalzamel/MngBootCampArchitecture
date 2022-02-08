﻿using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.Models.Dtos
{
    public class ModelListDto
    {
        public string Name { get; set; }
        public double DailyPrice { get; set; }
        public int TransmissionName { get; set; }
        public int FuelName { get; set; }
        public int BrandName { get; set; }
        public string ImageUrl { get; set; }
        //public virtual Brand Brand { get; set; }
        //public virtual Transmission Transmission { get; set; }
        //public virtual Fuel Fuel { get; set; }
    }
}
