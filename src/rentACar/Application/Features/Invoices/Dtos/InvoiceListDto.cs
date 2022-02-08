using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.Invoices.Dtos
{
    public class InvoiceListDto
    {
        public int CustomerName { get; set; }
        public string No { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime RentalStratDate { get; set; }
        public DateTime RentalEndDate { get; set; }
        public short TotalRentalDate { get; set; }
        public decimal RentalPrice { get; set; }
    }
}
