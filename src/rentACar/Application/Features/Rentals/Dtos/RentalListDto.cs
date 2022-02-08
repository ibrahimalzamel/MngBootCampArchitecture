using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.Rentals.Dtos
{
    public class RentalListDto
    {
      //  public string CarName { get; set; }
        public string ColorName { get; set; }
        public string ModelName { get; set; }
        public string Fule { get; set; }
        public string Plate { get; set; }
        public short ModelYear { get; set; }
        public string CustomerName { get; set; }
        public DateTime RentStartDate { get; set; }
        public DateTime RentEndDate { get; set; }
        public DateTime? ReturnDate { get; set; }
    }
}
