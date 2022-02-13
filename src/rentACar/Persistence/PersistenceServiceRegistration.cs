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
            services.AddScoped<ICarRepository, CarRepository>();
            services.AddScoped<ICarDamageRepository, CarDamageRepository>();
            services.AddScoped<IColorRepository, ColorRepository>();
            services.AddScoped<ICorporateCustomerRepository, CorporateCustomerRepository>();
            services.AddScoped<ICustomerRepository, CustomerRepository>();
            services.AddScoped<IFindeksCreditRateRepository, FindeksCreditRateRepository>();
            services.AddScoped<IFuelRepository, FuelRepository>();
            services.AddScoped<IIndividualCustomerRepository, IndividualCustomerRepository>();
            services.AddScoped<IInvoiceRepository, InvoiceRepository>();
            services.AddScoped<IModelRepository, ModelRepository>();
            services.AddScoped<IRentalRepository, RentalRepository>();
            services.AddScoped<IOperationClaimRepository, OperationClaimRepository>();
            services.AddScoped<IUserRepository, UserRepository>();
            services.AddScoped<IUserOperationClaimRepository, UserOperationClaimRepository>();
            services.AddScoped<ITransmissionRepository, TransmissionRepository>();

            return services; 
        }
    }
}
