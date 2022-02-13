using Core.Persistence.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    /*
     
     Tüm kiralamalar sonucunda fatura kesilmelidir.
(Fatura No, Oluşturma Tarihi, Kiralama tarihleri, 
Toplam kiralama gün sayısı, kiralama tutarı,musteri) 
Belirli tarih aralığında tüm faturalar listelenebilmelidir.
 Müşteriye ait faturalar listelenebilmelidir.
     */
    public class Invoice :Entity
    {
        public int CustomerId { get; set; }
        public string No { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime RentalStratDate { get; set; }
        public DateTime RentalEndDate { get; set; }
        public short TotalRentalDate { get; set; }
        public decimal RentalPrice { get; set; }
        public virtual Customer? Customer { get; set; }
        public Invoice()
        {
        }
        public Invoice(int id , int customerId, string no,
            DateTime createdDate, DateTime rentalStratDate, 
            DateTime rentalEndDate, short totalRentalDate, 
            decimal rentalPrice):this()
        {
            Id = id;
            CustomerId = customerId;
            No = no;
            CreatedDate = createdDate;
            RentalStratDate = rentalStratDate;
            RentalEndDate = rentalEndDate;
            TotalRentalDate = totalRentalDate;
            RentalPrice = rentalPrice;
        }
    }
}
