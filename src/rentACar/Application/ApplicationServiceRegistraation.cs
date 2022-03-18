using Application.Features.Brands.Rules;
using Application.Features.CarDamages.Rules;
using Application.Features.Cars.Rules;
using Application.Features.Colors.Rules;
using Application.Features.IndividualCustomers.Rules;
using Application.Features.Fuels.Rules;
using Application.Features.IndividualCustomers.Rules;
using Application.Features.Invoices.Rules;
using Application.Features.Models.Rules;
using Application.Features.Rentals.Rules;
using Application.Features.Transmissions.Rules;
using AutoMapper;
using Core.Application.Pipelines.Validation;
using FluentValidation;
using MediatR;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using Core.CrossCuttingConcerns.Logging.Serilog;
using Core.CrossCuttingConcerns.Logging.Serilog.Loggers;
using Core.Application.Pipelines.Logging;
using Application.Features.Customers.Rules;
using Application.Features.Users.Rules;
using Application.Features.OperationClaims.Rules;
using Application.Features.CorporateCustomers.Rules;
using Core.Security.JWT;
using Application.Services.AuthService;
using Application.Services.CarService;
using Application.Services.FindeksCreditRateService;
using Application.Services.InvoiceService;
using Application.Services.ModelService;
using Core.Mailing;
using Core.Mailing.MailkitImplementations;
using Application.Features.Auths.Rules;
using Core.Application.Pipelines.Caching;
using Core.ElasticSearch;
using Application.Features.FindeksCreditRates.Rules;
using Application.Features.AdditionalServices.Rules;
using Application.Features.RentalBranchs.Rules;
using Application.Features.UserOperationClaims.Rules;
using Application.Services.RentalsIAdditionalServiceService;
using Application.Services.AdditionalServiceService;
using Core.Application.Pipelines.Authorization;
using Application.Services.UserService;
using Application.Services.CustomerService;
using Application.Services.RentalService;

namespace Application
{
    public static class ApplicationServiceRegistraation
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services)
        {
            services.AddAutoMapper(Assembly.GetExecutingAssembly());
            services.AddMediatR(Assembly.GetExecutingAssembly());

            services.AddScoped<AdditionalServiceBusinessRules>();
            services.AddScoped<AuthBusinessRules>();
            services.AddScoped<BrandBusinessRules>();
            services.AddScoped<CarBusinessRules>();
            services.AddScoped<CarDamageBusinessRules>();
            services.AddScoped<ColorBusinessRules>();
            services.AddScoped<CorporateCustomerBusinessRules>();
            services.AddScoped<CustomerBusinessRules>();
            services.AddScoped<FindeksCreditRateBusinessRules>();
            services.AddScoped<FuelBusinessRules>();
            services.AddScoped<IndividualCustomerBusinessRules>();
            services.AddScoped<InvoiceBusinessRules>();
            services.AddScoped<ModelBusinessRules>();
            services.AddScoped<RentalBusinessRules>();
            services.AddScoped<RentalBranchBusinessRules>();
            services.AddScoped<OperationClaimBusinessRules>();
            services.AddScoped<UserBusinessRules>();
            services.AddScoped<UserOperationClaimBusinessRules>();
            services.AddScoped<TransmissionBusinessRules>();

            services.AddValidatorsFromAssembly(Assembly.GetExecutingAssembly());
            services.AddTransient(typeof(IPipelineBehavior<,>), typeof(AuthorizationBehavior<,>));
            services.AddTransient(typeof(IPipelineBehavior<,>), typeof(CachingBehavior<,>));
            services.AddTransient(typeof(IPipelineBehavior<,>), typeof(CacheRemovingBehavior<,>));
            services.AddTransient(typeof(IPipelineBehavior<,>), typeof(LoggingBehavior<,>));
            services.AddTransient(typeof(IPipelineBehavior<,>), typeof(RequestValidationBehavior<,>));


            services.AddScoped<IAdditionalServiceService, AdditionalServiceManager>();
            services.AddScoped<IAuthService, AuthManager>();
            services.AddScoped<ICarService, CarManager>();
            services.AddScoped<ICustomerService, CustomerManager>();
            services.AddScoped<IFindeksCreditRateService, FindeksCreditRateManager>();
            services.AddScoped<IInvoiceService, InvoiceManager>();
            services.AddScoped<IModelService, ModelManager>();
            services.AddScoped<IRentalService, RentalManager>();
            services.AddScoped<IRentalsAdditionalServiceService, RentalsAdditionalServiceManager>();
            services.AddScoped<IUserService, UserManager>();

            services.AddSingleton<IMailService, MailkitMailService>();
            services.AddSingleton<LoggerServiceBase, FileLogger>();
            services.AddSingleton<IElasticSearch, ElasticSearchManager>();

            return services;
        }
    }
}