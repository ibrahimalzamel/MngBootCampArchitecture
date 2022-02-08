using AutoMapper.Configuration;
using Domain.Entities;
using Domain.Enums;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Persistence.Contexts
{
    public class BaseDbContext : DbContext
    {
        protected IConfiguration  Configuration { get; set; }
        public BaseDbContext(DbContextOptions dbContextOptions , IConfiguration configuration):base(dbContextOptions) 
        {
            Configuration = configuration;  
        }
        public DbSet<Brand> Brands { get; set; }
        public DbSet<Model> Models { get; set; }
        public DbSet<Car> Cars { get; set; }
        public DbSet<CarDamage> CarDamages { get; set; }
        public DbSet<Color> Colors { get; set; }
        public DbSet<Fuel> Fuels { get; set; }
        public DbSet<Invoice> Invoices { get; set; }
        public DbSet<Rental> Rentals { get; set; }
        public DbSet<Transmission> Transmissions { get; set; }
        public DbSet<FindeksCreditRate> FindeksCreditRates { get; set; }
        public DbSet<Customer> Customers { get; set; }  
        public DbSet<CorporateCustomer> Corporations { get; set; }
        public DbSet<IndividualCustomer> Individuals { get; set; }
        public DbSet<RentalBranch> RentalBranches { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder )
        {
            // optionsBuilder.UseSqlServer(@"Server=(localdb)\MSSQLLocalDB;Database=RentACarDatebase;Trusted_Connection=true");

            //if (!optionsBuilder.IsConfigured)
            //{
            //    base.OnConfiguring(optionsBuilder.UseSqlServer(Configuration.GetConnectionString("RentACarConnectionString")));
            //}

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());  
            modelBuilder.Entity<Brand>(b =>
            {
                b.ToTable("Brands").HasKey(k =>k.Id);
                b.Property(p=>p.Id).HasColumnName("Id");
                b.Property(p=>p.Name).HasColumnName("Name");
                b.HasMany(p => p.Models);
            });
            modelBuilder.Entity<RentalBranch>(r =>
            {
                r.ToTable("RentalBranches").HasKey(r => r.Id);
                r.Property(r => r.Id).HasColumnName("Id");
                r.Property(r => r.City).HasColumnName("City");
                r.HasMany(r => r.Cars);
            });
            modelBuilder.Entity<Color>(c =>
            {
                c.ToTable("Colors").HasKey(k => k.Id);
                c.Property(p => p.Id).HasColumnName("Id");
                c.Property(p => p.Name).HasColumnName("Name");
                c.HasMany(p => p.Cars);
            });
            modelBuilder.Entity<Fuel>(f =>
            {
                f.ToTable("Fuels").HasKey(k => k.Id);
                f.Property(p => p.Id).HasColumnName("Id");
                f.Property(p => p.Name).HasColumnName("Name");
                f.HasMany(p => p.Models);
            });
            modelBuilder.Entity<Transmission>(t =>
            {
                t.ToTable("Transmissions").HasKey(k => k.Id);
                t.Property(p => p.Id).HasColumnName("Id");
                t.Property(p => p.Name).HasColumnName("Name");
                t.HasMany(p => p.Models);
            });
            modelBuilder.Entity<Car>(c=>
            {
                c.ToTable("Cars").HasKey(k => k.Id);
                c.Property(p => p.Id).HasColumnName("Id");
                c.Property(p => p.ColorId).HasColumnName("ColorId");
                c.Property(p => p.ModelId).HasColumnName("ModelId");
                c.Property(c => c.RentalBranchId).HasColumnName("RentalBranchId");
                c.Property(p => p.Kilometer).HasColumnName("Kilometer");
                c.Property(p => p.CarState).HasColumnName("State");
                c.Property(p => p.ModelYear).HasColumnName("ModelYear");
                c.Property(p => p.Plate).HasColumnName("Plate");
                c.HasOne(p => p.Color);
                c.HasMany(p => p.CarDamages);
                c.HasOne(p => p.Model);
                c.HasOne(c => c.RentalBranch);
            });
            modelBuilder.Entity<CarDamage>(c =>
            {
                c.ToTable("CarDamages").HasKey(k => k.Id);
                c.Property(p => p.Id).HasColumnName("Id");
                c.Property(p => p.CarId).HasColumnName("CarId");
                c.Property(p => p.IsFixed).HasColumnName("IsFixed").HasDefaultValue(false);
                c.HasOne(p => p.Car);
            });

            modelBuilder.Entity<Model>(m =>
            {
                m.ToTable("Models").HasKey(k => k.Id);
                m.Property(p => p.Id).HasColumnName("Id");
                m.Property(p => p.Name).HasColumnName("Name");
                m.Property(p => p.DailyPrice).HasColumnName("DailyPrice");
                m.Property(p => p.TransmissionId).HasColumnName("TransmissionId");
                m.Property(p => p.FuelId).HasColumnName("FuelId");
                m.Property(p => p.BrandId).HasColumnName("BrandId");
                m.Property(p => p.ImageUrl).HasColumnName("ImageUrl");
                m.HasMany(p => p.Cars);
                m.HasOne(p => p.Fuel);
                m.HasOne(p => p.Transmission);
                m.HasOne(p => p.Brand);

            });
            //modelBuilder.Entity<Customer>(c =>
            //{
            //    c.ToTable("Customers").HasKey(k => k.Id);
            //    c.Property(p => p.Id).HasColumnName("Id");
            //    c.Property(p => p.Email).HasColumnName("Email");
            //    c.HasOne(c => c.CorporateCustomer);
            //    //  c.HasOne(c => c.FindeksCreditRate);
            //    c.HasOne(c => c.IndividualCustomer);
            //    c.HasMany(c => c.Invoices);
            //    c.HasMany(c => c.Rentals);
            //    });

            modelBuilder.Entity<Customer>(c =>
            {
                c.ToTable("Customers").HasKey(c => c.Id);
                c.Property(c => c.Id).HasColumnName("Id");
                c.Property(c => c.Email).HasColumnName("Email");
                c.HasOne(c => c.CorporateCustomer);
              //  c.HasOne(c => c.FindeksCreditRate);
                c.HasOne(c => c.IndividualCustomer);
                c.HasMany(c => c.Invoices);
                c.HasMany(c => c.Rentals);
            });
            modelBuilder.Entity<CorporateCustomer>(c =>
            {
                c.ToTable("CorporateCustomers").HasKey(K=>K.Id);
                c.Property(p => p.Id).HasColumnName("Id");
                c.Property(p => p.CustomerId).HasColumnName("CustomerId");
                c.Property(p => p.CompanyName).HasColumnName("CompanyName");
                c.Property(p => p.TaxNumber).HasColumnName("TaxNumber");
                c.HasOne(p => p.Customer);
              
            });
            modelBuilder.Entity<IndividualCustomer>(c =>
            {
                c.ToTable("IndividualCustomers").HasKey(k=>k.Id);
                c.Property(p => p.Id).HasColumnName("Id");
                c.Property(p => p.CustomerId).HasColumnName("CustomerId");
                c.Property(p => p.FirstName).HasColumnName("FirstName");
                c.Property(p => p.LastName).HasColumnName("LastName");
                c.Property(p => p.NationalId).HasColumnName("NationalId");
                c.HasOne(p => p.Customer);

            });
            modelBuilder.Entity<Invoice>(t =>
            {
                t.ToTable("Invoices").HasKey(k => k.Id);
                t.Property(p => p.Id).HasColumnName("Id");
                t.Property(p => p.CustomerId).HasColumnName("CustomerId");
                t.Property(p => p.No).HasColumnName("No");
                t.Property(p => p.CreatedDate).HasColumnName("CreatedDate");
                t.Property(p => p.RentalStratDate).HasColumnName("RentalStratDate");
                t.Property(p => p.RentalEndDate).HasColumnName("RentalEndDate");
                t.Property(p => p.TotalRentalDate).HasColumnName("TotalRentalDate");
                t.Property(p => p.RentalPrice).HasColumnName("RentalPrice");
                t.HasOne(p => p.Customer);
            });


            modelBuilder.Entity<Rental>(t =>
            {
                t.ToTable("Rentals").HasKey(k => k.Id);
                t.Property(p => p.Id).HasColumnName("Id");
                t.Property(p => p.CustomerId).HasColumnName("CustomerId");
                t.Property(p => p.CarId).HasColumnName("CarId");
                t.Property(p => p.RentStartDate).HasColumnName("RentStartDate");
                t.Property(p => p.RentEndDate).HasColumnName("RentEndDate");
                t.Property(p => p.ReturnDate).HasColumnName("ReturnDate");
                t.HasOne(p => p.Car);
                t.HasOne(p => p.Customer);
            });
            var brand1 = new Brand(1, "BMW");
            var brand2 = new Brand(2, "Mercedes");
            modelBuilder.Entity<Brand>().HasData(brand1,brand2);

            Color[] colorSeeds = { new(1, "Red"), new(2, "Blue") };
            modelBuilder.Entity<Color>().HasData(colorSeeds);


            Transmission[] transmissionsSeeds = { new(1, "Manuel"), new(2, "Automatic") };
            modelBuilder.Entity<Transmission>().HasData(transmissionsSeeds);

            Fuel[] fuelSeeds = { new(1, "Diesel"), new(2, "Electric") };
            modelBuilder.Entity<Fuel>().HasData(fuelSeeds);

            var model1 = new Model(1, "418i", 1000, 2, 1, 1, "");
            var model2 = new Model(2, "CLA 180D", 1000, 2, 1, 1, "");
            modelBuilder.Entity<Model>().HasData(model1, model2);

            modelBuilder.Entity<Car>().HasData(
                new Car(1, 1, 1,1, CarState.Rented, 13000,2018 ,"06ABC06",1500 ),
                new Car(2, 1, 1, 1, CarState.Rented, 13000, 2018, "34ABC34", 1500)

                );
          

            var invoice1 = new Invoice(1, 2, "152646", DateTime.Today,DateTime.Today,DateTime.Today.AddDays(2), 3, 100);
            modelBuilder.Entity<Invoice>().HasData(invoice1);
            var rental1 = new Rental(1, 1, 1, DateTime.Today, DateTime.Today, DateTime.Today);
            modelBuilder.Entity<Rental>().HasData(rental1);
            
            Customer[] customers = { new(1, "ibrahim@gmail.com"), new(2, "ibrahim@gmail.com") };
            modelBuilder.Entity<Customer>().HasData(customers);

            IndividualCustomer[] individualCustomers = { new(1, 1, "123123123123", "İbrahim", "ALZAMEL") };
            modelBuilder.Entity<IndividualCustomer>().HasData(individualCustomers);

            CorporateCustomer[] corporateCustomers = { new(1, 2, "ibrahim alzamel", "5522452556") };
            modelBuilder.Entity<CorporateCustomer>().HasData(corporateCustomers);
            RentalBranch[] rentalBranchSeeds = { new(1, City.Ankara), new(2, City.Antalya) };
            modelBuilder.Entity<RentalBranch>().HasData(rentalBranchSeeds);
        }
    }
}
