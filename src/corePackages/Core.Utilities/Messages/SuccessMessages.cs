using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Utilities.Messages
{
    public static class SuccessMessages
    {
        private static string carAdded = "Araç Eklendi";
        private static string carUpdated = "Araç Güncellendi";
        private static string carsListed = "Mevcut Araçlar Listeleniyor...";
        private static string carDeleted = "Araç silindi";

        private static string carImageAdded = "Araç Resimleri Eklendi";
        private static string carImageUpdated = "Araç Resimleri Güncellendi";
        private static string carsImageListed = "Mevcut Araçlar Resimleri Listeleniyor...";
        private static string carImageDeleted = "Araç Resimleri silindi";

        private static string brandAdded = "Marka başarıyla veritabanına eklendi.";
        private static string brandUpdate = "Marka başarıyla güncellendi.";
        private static string brandsListed = "Markalar Listeleniyor...";
        private static string brandDeleted = "Marka başarıyla veritabanından silindi.";

        private static string colorAdded = "Renk Eklendi";
        private static string colorUpdate = "Renk Güncellendi";
        private static string colorListed = "Renkler Listeleniyor...";
        private static string colorDeleted = "Renk Silindi";

        private static string userAdded = "Kullanıcı Eklendi";
        private static string userDeleted = "Kullanıcı Silindi";
        private static string userUpdated = "Kullanıcı Güncellendi";
        private static string usersListed = "Kullanıcılar Listeleniyor...";

        private static string customerAdded = "Müşteri Eklendi";
        private static string customerDeleted = "Müşteri Silindi";
        private static string customerUpdated = "Müşteri Güncellendi";
        private static string customersListed = "Müşteriler Listeleniyor...";

        private static string rentalAdded = "Kiralama Bilgisi Eklendi";
        private static string rentalUpdateReturnDate = "Araç Teslim Alındı";
        private static string rentalUpdateReturnDateError = "Araç Teslim Alınmış";
        private static string rentalUpdated = "Kiralama Bilgisi Güncellendi";
        private static string rentalListed = "Kiralama Bilgileri Listeleniyor...";
        private static string rentalDeleted = "Kiralama Bilgisi Silindi";

        public static string CarAdded { get => carAdded; set => carAdded = value; }
        public static string CarUpdated { get => carUpdated; set => carUpdated = value; }
        public static string CarsListed { get => carsListed; set => carsListed = value; }
        public static string CarDeleted { get => carDeleted; set => carDeleted = value; }
        public static string BrandAdded { get => brandAdded; set => brandAdded = value; }
        public static string BrandUpdate { get => brandUpdate; set => brandUpdate = value; }
        public static string BrandsListed { get => brandsListed; set => brandsListed = value; }
        public static string BrandDeleted { get => brandDeleted; set => brandDeleted = value; }
        public static string ColorAdded { get => colorAdded; set => colorAdded = value; }
        public static string ColorUpdate { get => colorUpdate; set => colorUpdate = value; }
        public static string ColorListed { get => colorListed; set => colorListed = value; }
        public static string ColorDeleted { get => colorDeleted; set => colorDeleted = value; }
        public static string UserAdded { get => userAdded; set => userAdded = value; }
        public static string UserDeleted { get => userDeleted; set => userDeleted = value; }
        public static string UserUpdated { get => userUpdated; set => userUpdated = value; }
        public static string UsersListed { get => usersListed; set => usersListed = value; }
        public static string CustomerAdded { get => customerAdded; set => customerAdded = value; }
        public static string CustomerDeleted { get => customerDeleted; set => customerDeleted = value; }
        public static string CustomerUpdated { get => customerUpdated; set => customerUpdated = value; }
        public static string CustomersListed { get => customersListed; set => customersListed = value; }
        public static string RentalAdded { get => rentalAdded; set => rentalAdded = value; }
        public static string RentalUpdateReturnDate { get => rentalUpdateReturnDate; set => rentalUpdateReturnDate = value; }
        public static string RentalUpdateReturnDateError { get => rentalUpdateReturnDateError; set => rentalUpdateReturnDateError = value; }
        public static string RentalUpdated { get => rentalUpdated; set => rentalUpdated = value; }
        public static string RentalListed { get => rentalListed; set => rentalListed = value; }
        public static string RentalDeleted { get => rentalDeleted; set => rentalDeleted = value; }
        public static string CarImageAdded { get => carImageAdded; set => carImageAdded = value; }
        public static string CarImageUpdated { get => carImageUpdated; set => carImageUpdated = value; }
        public static string CarsImageListed { get => carsImageListed; set => carsImageListed = value; }
        public static string CarImageDeleted { get => carImageDeleted; set => carImageDeleted = value; }
    }
}
