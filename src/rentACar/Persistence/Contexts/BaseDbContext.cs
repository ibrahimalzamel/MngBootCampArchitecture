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
        public DbSet<Color> Colors { get; set; }
        public DbSet<Fuel> Fuels { get; set; }
        public DbSet<Invoice> Invoices { get; set; }
        public DbSet<Rental> Rentals { get; set; }
        public DbSet<Transmission> Transmissions { get; set; }  
        public DbSet<Customer> Customers { get; set; }  
        public DbSet<CorporateCustomer> Corporations { get; set; }
        public DbSet<IndividualCustomer> Individuals { get; set; }  
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
            modelBuilder.Entity<Car>(t =>
            {
                t.ToTable("Cars").HasKey(k => k.Id);
                t.Property(p => p.Id).HasColumnName("Id");
                t.Property(p => p.ModelYear).HasColumnName("ModelYear");
                t.Property(p => p.Plate).HasColumnName("Plate");
                t.Property(p => p.ColorId).HasColumnName("ColorId");
                t.Property(p => p.ModelId).HasColumnName("ModelId");
                t.Property(p => p.CarState).HasColumnName("State");
                t.HasOne(p => p.Color);
                t.HasOne(p => p.Model);
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
            modelBuilder.Entity<Customer>(c =>
            {
                c.ToTable("Customers").HasKey(k => k.Id);
                c.Property(p => p.Id).HasColumnName("Id");
                c.Property(p => p.Email).HasColumnName("Email");
            });
            modelBuilder.Entity<CorporateCustomer>(c =>
            {
                c.ToTable("CorporateCustomers");
                c.Property(p => p.CompanyName).HasColumnName("CompanyName");
                c.Property(p => p.TaxNumber).HasColumnName("TaxNumber");
              
            });
            modelBuilder.Entity<IndividualCustomer>(c =>
            {
                c.ToTable("IndividualCustomers");
                c.Property(p => p.FirstName).HasColumnName("FirstName");
                c.Property(p => p.LastName).HasColumnName("LastName");
                c.Property(p => p.NationalId).HasColumnName("NationalId");

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

            var color1 = new Color(1, "Red");
            var color2 = new Color(2, "Blue");
            modelBuilder.Entity<Color>().HasData(color1,color2);

            var transmission1 = new Transmission(1, "Manuel");
            var transmission2 = new Transmission(2, "Automatic");
            modelBuilder.Entity<Transmission>().HasData(transmission1, transmission2);

            var fuel1 = new Fuel(1, "Diesel");
            var fuel2 = new Fuel(2, "Electric");
            modelBuilder.Entity<Fuel>().HasData(fuel1, fuel2);

            var model1 = new Model(1, "418i", 1000, 2, 1, 1, "");
            var model2 = new Model(2, "CLA 180D", 1000, 2, 1, 1, "");
            modelBuilder.Entity<Model>().HasData(model1, model2);

            modelBuilder.Entity<Car>().HasData(
                new Car(1, 1, 1, 2018, "06ABC06", CarState.Rented),
                new Car(2, 2, 2, 2018, "34ABC34", CarState.Rented)
                );
            var customer1 = new Customer(1, "ibrahim@gmail");
            var customer2 = new Customer(2,"alzamel@gmail");
            modelBuilder.Entity<Customer>().HasData(customer1, customer2);

            var invoice1 = new Invoice(1, 2, "152646", DateTime.Today,DateTime.Today,DateTime.Today.AddDays(2), 3, 100);
            modelBuilder.Entity<Invoice>().HasData(invoice1);
            var rental1 = new Rental(1, 1, 1, DateTime.Today, DateTime.Today, DateTime.Today);
            modelBuilder.Entity<Rental>().HasData(rental1);
            //var customer3 = new CorporateCustomer(1, "mail1@gmail.com", "A12345", "SRE");
            //var customer4 = new CorporateCustomer(2, "mail2@gmail.com", "A12345", "SRE");

            // modelBuilder.Entity<CorporateCustomer>().HasData(customer3, customer3);

            //var customer5 = new IndividualCustomer(3,"mail3@gmail.com","124545","ibrahim","alzamel");
            //modelBuilder.Entity<IndividualCustomer>().HasData(customer5);

        }
    }
}
