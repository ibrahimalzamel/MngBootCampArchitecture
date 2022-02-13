using AutoMapper.Configuration;
using Core.Security.Entities;
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

        public DbSet<Customer> Customers { get; set; }

        public DbSet<Brand> Brands { get; set; } 
        public DbSet<Car> Cars { get; set; }
        public DbSet<CarDamage> CarDamages { get; set; }
        public DbSet<Color> Colors { get; set; }
        public DbSet<CorporateCustomer> Corporations { get; set; }
        public DbSet<FindeksCreditRate> FindeksCreditRates { get; set; }
        public DbSet<Fuel> Fuels { get; set; }
        public DbSet<IndividualCustomer> Individuals { get; set; }
        public DbSet<Invoice> Invoices { get; set; }
        public DbSet<Model> Models { get; set; }
        public DbSet<RentalBranch> RentalBranches { get; set; }
        public DbSet<OperationClaim> OperationClaims { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<UserOperationClaim> UserOperationClaims { get; set; }
        public DbSet<Transmission> Transmissions { get; set; }


        public DbSet<Rental> Rentals { get; set; }

      
        public BaseDbContext(DbContextOptions dbContextOptions, IConfiguration configuration) : base(dbContextOptions)
        {
            Configuration = configuration;
        }
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

              modelBuilder.Entity<Customer>(c =>
            {
                c.ToTable("Customers").HasKey(c => c.Id);
                c.Property(c => c.Id).HasColumnName("Id");
                c.Property(c => c.UserId).HasColumnName("UserId");
                c.HasOne(c => c.User);
                c.HasOne(c => c.CorporateCustomer);
                c.HasOne(c => c.FindeksCreditRate);
                c.HasOne(c => c.IndividualCustomer);
                c.HasMany(c => c.Invoices);
                c.HasMany(c => c.Rentals);
            });
            modelBuilder.Entity<Brand>(b =>
            {
                b.ToTable("Brands").HasKey(k =>k.Id);
                b.Property(p=>p.Id).HasColumnName("Id");
                b.Property(p=>p.Name).HasColumnName("Name");
                b.HasMany(p => p.Models);
            });
            modelBuilder.Entity<Car>(c =>
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
            modelBuilder.Entity<Color>(c =>
            {
                c.ToTable("Colors").HasKey(k => k.Id);
                c.Property(p => p.Id).HasColumnName("Id");
                c.Property(p => p.Name).HasColumnName("Name");
                c.HasMany(p => p.Cars);
            });
            modelBuilder.Entity<CorporateCustomer>(c =>
            {
                c.ToTable("CorporateCustomers").HasKey(K => K.Id);
                c.Property(p => p.Id).HasColumnName("Id");
                c.Property(p => p.CustomerId).HasColumnName("CustomerId");
                c.Property(p => p.CompanyName).HasColumnName("CompanyName");
                c.Property(p => p.TaxNumber).HasColumnName("TaxNumber");
                c.HasOne(p => p.Customer);

            });


            modelBuilder.Entity<FindeksCreditRate>(f =>
            {
                f.ToTable("FindeksCreditRates").HasKey(f => f.Id);
                f.Property(f => f.Id).HasColumnName("Id");
                f.Property(f => f.CustomerId).HasColumnName("CustomerId");
                f.Property(f => f.Score).HasColumnName("Score");
                f.HasOne(f => f.Customer);
            });
            modelBuilder.Entity<Fuel>(f =>
            {
                f.ToTable("Fuels").HasKey(k => k.Id);
                f.Property(p => p.Id).HasColumnName("Id");
                f.Property(p => p.Name).HasColumnName("Name");
                f.HasMany(p => p.Models);
            });
            modelBuilder.Entity<IndividualCustomer>(c =>
            {
                c.ToTable("IndividualCustomers").HasKey(k => k.Id);
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
                t.Property(p => p.CreatedDate).HasColumnName("CreatedDate").HasDefaultValue(DateTime.Now);
                t.Property(p => p.RentalStratDate).HasColumnName("RentalStratDate");
                t.Property(p => p.RentalEndDate).HasColumnName("RentalEndDate");
                t.Property(p => p.TotalRentalDate).HasColumnName("TotalRentalDate");
                t.Property(p => p.RentalPrice).HasColumnName("RentalPrice");
                t.HasOne(p => p.Customer);
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
            modelBuilder.Entity<Rental>(t =>
            {
                t.ToTable("Rentals").HasKey(k => k.Id);
                t.Property(p => p.Id).HasColumnName("Id");
                t.Property(p => p.CustomerId).HasColumnName("CustomerId");
                t.Property(p => p.CarId).HasColumnName("CarId");
                t.Property(p => p.RentStartRentalBranchId).HasColumnName("RentStartRentalBranchId");
                t.Property(p => p.RentEndRentalBranchId).HasColumnName("RentEndRentalBranchId");
                t.Property(p => p.RentStartDate).HasColumnName("RentStartDate");
                t.Property(p => p.RentEndDate).HasColumnName("RentEndDate");
                t.Property(p => p.ReturnDate).HasColumnName("ReturnDate");
                t.Property(p => p.RentStartKilometer).HasColumnName("RentStartKilometer");
                t.Property(p => p.RentEndKilometer).HasColumnName("RentEndKilometer");
                t.HasOne(p => p.Car);
                t.HasOne(p => p.Customer);
                t.HasOne(p => p.RentStartRentalBranch);
                t.HasOne(p => p.RentEndRentalBranch);
            });

            modelBuilder.Entity<RentalBranch>(r =>
            {
                r.ToTable("RentalBranches").HasKey(r => r.Id);
                r.Property(r => r.Id).HasColumnName("Id");
                r.Property(r => r.City).HasColumnName("City");
                r.HasMany(r => r.Cars);
            });
            modelBuilder.Entity<OperationClaim>(o =>
            {
                o.ToTable("OperationClaims").HasKey(o => o.Id);
                o.Property(o => o.Id).HasColumnName("Id");
                o.Property(o => o.Name).HasColumnName("Name");
            });

            modelBuilder.Entity<User>(u =>
            {
                u.ToTable("Users").HasKey(u => u.Id);
                u.Property(u => u.Id).HasColumnName("Id");
                u.Property(u => u.FirstName).HasColumnName("FirstName");
                u.Property(u => u.LastName).HasColumnName("LastName");
                u.Property(u => u.Email).HasColumnName("Email");
                u.Property(u => u.PasswordSalt).HasColumnName("PasswordSalt");
                u.Property(u => u.PasswordHash).HasColumnName("PasswordHash");
                u.Property(u => u.Status).HasColumnName("Status").HasDefaultValue(true);
            });

          
            modelBuilder.Entity<UserOperationClaim>(f =>
            {
                f.ToTable("UserOperationClaims").HasKey(k => k.Id);
                f.Property(p => p.Id).HasColumnName("Id");
                f.Property(p => p.UserId).HasColumnName("UserId");
                f.Property(p => p.OperationClaimId).HasColumnName("OperationClaimId");
                f.HasOne(p => p.User);
                f.HasOne(p => p.OperationClaim);
            });

            modelBuilder.Entity<Transmission>(t =>
            {
                t.ToTable("Transmissions").HasKey(k => k.Id);
                t.Property(p => p.Id).HasColumnName("Id");
                t.Property(p => p.Name).HasColumnName("Name");
                t.HasMany(p => p.Models);
            });







            Brand[] brandSeeds = { new(1, "BMW"), new(2, "Mercedes") };
            modelBuilder.Entity<Brand>().HasData(brandSeeds);

            Car[] carSeeds =
            {
            new(1, 1, 1, 1, CarState.Rented, 1000, 2018, "07ABC07", 500),
            new(2, 2, 2, 2, CarState.Rented, 1000, 2018, "15ABC15", 1100)
        };
            modelBuilder.Entity<Car>().HasData(carSeeds);

            Color[] colorSeeds = { new(1, "Red"), new(2, "Blue") };
            modelBuilder.Entity<Color>().HasData(colorSeeds);

            CorporateCustomer[] corporateCustomers = { new(1, 1, "Ahmet Çetinkaya", "54154512") };
            modelBuilder.Entity<CorporateCustomer>().HasData(corporateCustomers);

            FindeksCreditRate[] findeksCreditRates = { new(1, 1, 1000), new(2, 2, 1900) };
            modelBuilder.Entity<FindeksCreditRate>().HasData(findeksCreditRates);

            Fuel[] fuelSeeds = { new(1, "Diesel"), new(2, "Electric") };
            modelBuilder.Entity<Fuel>().HasData(fuelSeeds);

            IndividualCustomer[] individualCustomers = { new(1, 1, "Ahmet", "Çetinkaya", "123123123123") };
            modelBuilder.Entity<IndividualCustomer>().HasData(individualCustomers);

            Model[] modelSeeds = { new(1, "418i",1000,1,1,1,""), new(2,"CLA 180D",  600,2, 2, 1,  "") };
            modelBuilder.Entity<Model>().HasData(modelSeeds);

            Rental[] rentalSeeds =
            {
            new(1, 1, 2, 1, 2, DateTime.Today, DateTime.Today.AddDays(2), null, 1000, 1200),
            new(2, 2, 1, 2, 1, DateTime.Today, DateTime.Today.AddDays(2), null, 1000, 1200)
        };
            modelBuilder.Entity<Rental>().HasData(rentalSeeds);

            RentalBranch[] rentalBranchSeeds = { new(1, City.Ankara), new(2, City.Antalya) };
            modelBuilder.Entity<RentalBranch>().HasData(rentalBranchSeeds);

            Invoice[] invoiceSeeds =
            {
            new(1, 1, "123123", DateTime.Today, DateTime.Today, DateTime.Today.AddDays(2), 2, 1000),
            new(2, 1, "123123", DateTime.Today, DateTime.Today, DateTime.Today.AddDays(2), 2, 2000)
        };
            modelBuilder.Entity<Invoice>().HasData(invoiceSeeds);

            OperationClaim[] operationClaimSeeds = { new(1, "Admin") };
            modelBuilder.Entity<OperationClaim>().HasData(operationClaimSeeds);

            Transmission[] transmissionsSeeds = { new(1, "Manuel"), new(2, "Automatic") };
            modelBuilder.Entity<Transmission>().HasData(transmissionsSeeds);
        }
    }
}
