using Core.Persistence.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public class AdditionalService : Entity
    {
        public string Name { get; set; }
        public decimal DailyPrice { get; set; }

        public AdditionalService()
        {
        }

        public AdditionalService(int id, string name, decimal dailyPrice) : base(id)
        {
            Name = name;
            DailyPrice = dailyPrice;
        }
    }
}
