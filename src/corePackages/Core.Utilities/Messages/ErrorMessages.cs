using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Utilities.Messages
{
    public static class ErrorMessages
    {
        private static string AuthorizationDenied = "Yetkiniz Yok.";

        private static string checkDailyPrice = "Günlük kira ücreti 0'dan fazla olmalı";
        private static string carNameInvalid = "Araç ismi minimum 2 karakter olmalıdır";

        private static string firstNameLastNameInvalid = "İsim veya Soyisim Girilmemiş";

        private static string colorNotAdded = "HATA. Renk Eklenmedi";
        private static string colorNotDeleted = "HATA. Renk Silinemedi";
        private static string colorNotUpdated = "HATA. Renk Güncellemedi";
        private static string colorNameAlreadyExistsError = "HATA.Renk adı Mevcut değil";

        private static string carNotAdded = "HATA. Araba Eklenmedi";
        private static string carNotDeleted = "HATA. Araba Silinemedi";
        private static string carNotUpdated = "HATA. Araba Güncellemedi";
        private static string carNameAlreadyExistsError = "HATA.Araba adı Mevcut değil";

        private static string customerNotAdded = "HATA. Müşteri Eklenemedi";
        private static string customerNotDeleted = "HATA. Müşteri Silinemedi";
        private static string customerNotUpdated = "HATA. Müşteri Güncellemedi";
        private static string customerNameAlreadyExistsError = "HATA.Müşteri adı Mevcut değil";

        private static string userNotAdded = "HATA. kullanıcı Eklenemedi";
        private static string userNotDeleted = "HATA. kullanıcı Silinemedi";
        private static string userNotUpdated = "HATA. kullanıcı Güncellemedi";
        private static string userNameAlreadyExistsError = "HATA.kullanıcı adı Mevcut değil";

        private static string brandNotAdded = "HATA. Marka Eklenmedi";
        private static string brandNotDeleted = "HATA. Marka Silinemedi";
        private static string brandNotUpdated = "HATA. Marka Güncellemedi";
        private static string BrandNameAlreadyExistsError = "HATA.Marka adı Mevcut değil";

        private static string rentalNotAdded = "HATA. kiralama Eklenmedi";
        private static string rentalNotDeleted = "HATA. kiralama Silinemedi";
        private static string rentalNotUpdated = "HATA. kiralama Güncellemedi";
        private static string rentalNameAlreadyExistsError = "HATA.kiralama adı Mevcut değil";


        private static string rentalAddedError = "Araç teslim edilmediği için tekrar kiraya verilemez";
        private static string rentalUpdateReturnDate = "Araç Teslim Alındı";

        private static string maintenanceTime = "Sistem Bakımda";
        private static string carImageLimitExceeded = "Fotoğraf yükleme limitine takıldınız. En fazla 5 fotoğraf eklenebilir.";
        private static string productNameInvalid = "Ürün ismi geçersiz";

        public static string CheckDailyPrice { get => checkDailyPrice; set => checkDailyPrice = value; }
        public static string CarNameInvalid { get => carNameInvalid; set => carNameInvalid = value; }
        public static string FirstNameLastNameInvalid { get => firstNameLastNameInvalid; set => firstNameLastNameInvalid = value; }
        public static string UserNotDeleted { get => userNotDeleted; set => userNotDeleted = value; }
        public static string CustomerNotAdded { get => customerNotAdded; set => customerNotAdded = value; }
        public static string CustomerNotDeleted { get => customerNotDeleted; set => customerNotDeleted = value; }
        public static string RentalAddedError { get => rentalAddedError; set => rentalAddedError = value; }
        public static string RentalUpdateReturnDate { get => rentalUpdateReturnDate; set => rentalUpdateReturnDate = value; }
        public static string MaintenanceTime { get => maintenanceTime; set => maintenanceTime = value; }
        public static string CarImageLimitExceeded { get => carImageLimitExceeded; set => carImageLimitExceeded = value; }
        public static string ProductNameInvalid { get => productNameInvalid; set => productNameInvalid = value; }
        public static string AuthorizationDenied1 { get => AuthorizationDenied; set => AuthorizationDenied = value; }
        public static string BrandNameAlreadyExistsError1 { get => BrandNameAlreadyExistsError; set => BrandNameAlreadyExistsError = value; }
        public static string ColorNotAdded { get => colorNotAdded; set => colorNotAdded = value; }
        public static string ColorNotDeleted { get => colorNotDeleted; set => colorNotDeleted = value; }
        public static string ColorNotUpdated { get => colorNotUpdated; set => colorNotUpdated = value; }
        public static string ColorNameAlreadyExistsError { get => colorNameAlreadyExistsError; set => colorNameAlreadyExistsError = value; }
        public static string CarNotAdded { get => carNotAdded; set => carNotAdded = value; }
        public static string CarNotDeleted { get => carNotDeleted; set => carNotDeleted = value; }
        public static string CarNotUpdated { get => carNotUpdated; set => carNotUpdated = value; }
        public static string CarNameAlreadyExistsError { get => carNameAlreadyExistsError; set => carNameAlreadyExistsError = value; }
        public static string CustomerNotUpdated { get => customerNotUpdated; set => customerNotUpdated = value; }
        public static string CustomerNameAlreadyExistsError { get => customerNameAlreadyExistsError; set => customerNameAlreadyExistsError = value; }
        public static string BrandNotAdded { get => brandNotAdded; set => brandNotAdded = value; }
        public static string BrandNotDeleted { get => brandNotDeleted; set => brandNotDeleted = value; }
        public static string BrandNotUpdated { get => brandNotUpdated; set => brandNotUpdated = value; }
        public static string UserNotAdded { get => userNotAdded; set => userNotAdded = value; }
        public static string UserNotUpdated { get => userNotUpdated; set => userNotUpdated = value; }
        public static string UserNameAlreadyExistsError { get => userNameAlreadyExistsError; set => userNameAlreadyExistsError = value; }
        public static string RentalNotAdded { get => rentalNotAdded; set => rentalNotAdded = value; }
        public static string RentalNotDeleted { get => rentalNotDeleted; set => rentalNotDeleted = value; }
        public static string RentalNotUpdated { get => rentalNotUpdated; set => rentalNotUpdated = value; }
        public static string RentalNameAlreadyExistsError { get => rentalNameAlreadyExistsError; set => rentalNameAlreadyExistsError = value; }
    }
}
