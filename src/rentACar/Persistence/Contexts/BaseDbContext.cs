using AutoMapper.Configuration;
using Domain.Entities;
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
        public DbSet<Fuel> Fuel { get; set; }
        public DbSet<Transmission> Transmissions { get; set; }  

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
                b.Property(p=>p.Id).HasColumnName("id");
                b.Property(p=>p.Name).HasColumnName("name");
                b.HasMany(p => p.Models);
            });
            modelBuilder.Entity<Model>(m =>
            {
                m.ToTable("Models").HasKey(k => k.Id);
                m.Property(p => p.Id).HasColumnName("id");
                m.Property(p => p.Name).HasColumnName("name");
                m.Property(p => p.DailyPrice).HasColumnName("dailyPrice");
                m.Property(p => p.TransmissionId).HasColumnName("transmissionId");
                m.Property(p => p.FuelId).HasColumnName("fuelId");
                m.Property(p => p.BrandId).HasColumnName("brandId");
                m.Property(p => p.ImageUrl).HasColumnName("imageUrl");
                m.Property(p => p.BrandId).HasColumnName("brandId");
                m.HasOne(p => p.Cars);
                m.HasOne(p => p.Fuel);
                m.HasOne(p => p.Transmission);
                m.HasOne(p => p.Brand);

            });

        }

    }
}
