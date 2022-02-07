using Application.Features.Brands.Rules;
using Application.Features.Cars.Rules;
using Application.Features.Colors.Rules;
using Application.Features.Customers.IndividualCustomers.Rules;
using Application.Features.Fuels.Rules;
using Application.Features.Models.Rules;
using Application.Features.Transmissions.Rules;
using AutoMapper;
using MediatR;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Application
{
    public static class ApplicationServiceRegistraation
    {
        public static IServiceCollection AddApplicationService(this IServiceCollection services)
        {
            services.AddAutoMapper(Assembly.GetExecutingAssembly());
            services.AddMediatR(Assembly.GetExecutingAssembly());  
            services.AddScoped<BrandBusinessRules>();
            services.AddScoped<ModelBusinessRules>();
            services.AddScoped<ColorBusinessRules>();
            services.AddScoped<CarBusinessRules>();
            services.AddScoped<FuelBusinessRules>();
            services.AddScoped<TransmissionBusinessRules>();
            services.AddScoped<IndividualCustomerBusinessRules>();

            return services;
        }
    }
}