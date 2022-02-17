﻿using Core.Persistence.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public class Model : Entity
    {
        public string Name { get; set; }
        public decimal DailyPrice { get; set; }
        public int TransmissionId { get; set; }
        public int FuelId { get; set; }
        public int BrandId { get; set; }
        public string ImageUrl { get; set; }

        public virtual Brand? Brand { get; set; }
        public virtual Transmission? Transmission { get; set; }
        public virtual Fuel? Fuel { get; set; }
        public virtual ICollection<Car> Cars { get; set; }

        public Model()
        {
            Cars = new HashSet<Car>();
        }

        public Model(int id, int brandId, int fuelId, int transmissionId, string name, decimal dailyPrice,
                 string imageUrl) : this()
        {
            Id = id;
            BrandId = brandId;
            FuelId = fuelId;
            TransmissionId = transmissionId;
            Name = name;
            DailyPrice = dailyPrice;
            ImageUrl = imageUrl;
        }
    }
}
