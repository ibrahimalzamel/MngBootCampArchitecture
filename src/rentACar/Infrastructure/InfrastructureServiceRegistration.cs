using Application.Services.FindeksService;
using Application.Services.POSService;
using Infrastructure.Adaters.FakeFindeksService;
using Infrastructure.Adaters.FakePOSService;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure
{
    public static class InfrastructureServiceRegistration
    {
        public static IServiceCollection AddInfrastructureServices(this IServiceCollection services)
        {
            services.AddScoped<IFindeksService, FakeFindeksServiceAdapter>();
            services.AddScoped<IPOSService, FakePOSServiceAdapter>();
            return services;
        }
    }
}
