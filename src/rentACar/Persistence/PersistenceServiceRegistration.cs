﻿using Application.Services.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Persistence.Contexts;
using Persistence.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Persistence
{
    public static class PersistenceServiceRegistration
    {
        public static  IServiceCollection AddPersistenceServices(this IServiceCollection services , IConfiguration configuration )
        {
            services.AddDbContext<BaseDbContext>(option => option.UseSqlServer
                            (configuration.GetConnectionString("rentACarConnectionString")));

            services.AddScoped<IBrandRepository, BrandRepository>();
            services.AddScoped<IModelRepository, ModelRepository>();
            services.AddScoped<IColorRepository, ColorRepository>();
            services.AddScoped<ICarRepository, CarRepository>();
            services.AddScoped<IFuelRepository, FuelRepository>();
            services.AddScoped<ITransmissionRepository, TransmissionRepository>();
            services.AddScoped<IIndividualCustomerRepository,IndividualCustomerRepository>();
            services.AddScoped<ICorporateCustomerRepository, CorporateCustomerRepository>();
            services.AddScoped<IRentalRepository, RentalRepository>();
            services.AddScoped<IInvoiceRepository, InvoiceRepository>();    
            return services; 
        }
    }
}
