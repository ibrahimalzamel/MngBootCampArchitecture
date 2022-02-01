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

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder )
        {
            if (!optionsBuilder.IsConfigured)
            {
                base.OnConfiguring(optionsBuilder.UseSqlServer(Configuration.GetConnectionString("RentACarConnectionString")));
            }

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

        }

    }
}
