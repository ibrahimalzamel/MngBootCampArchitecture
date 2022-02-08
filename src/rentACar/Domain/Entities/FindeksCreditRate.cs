using Core.Persistence.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    internal class FindeksCreditRate : Entity
    {
        public int CustomerId { get; set; }
        public short Score { get; set; }

        public virtual Customer Customer { get; set; }

        public FindeksCreditRate()
        {
        }

        public FindeksCreditRate(int id, int customerId, short score) : base(id)
        {
            CustomerId = customerId;
            Score = score;
        }
    }
}