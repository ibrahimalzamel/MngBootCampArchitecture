using Application.Features.Customers.IndividualCustomers.Commands.CreateIndividualCustomer;
using Application.Features.Customers.IndividualCustomers.Commands.DeleteIndividualCustomer;
using Application.Features.Customers.IndividualCustomers.Commands.UpdateIndividualCustomer;
using Application.Features.Customers.IndividualCustomers.Dtos;
using Application.Features.Customers.IndividualCustomers.Models;
using AutoMapper;
using Core.Persistence.Paging;
using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.Customers.IndividualCustomers.Profiles
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<IndividualCustomer, CreateIndividualCustomerCommand>().ReverseMap();
            CreateMap<IndividualCustomer, DeleteIndividualCustomerCommand>().ReverseMap();
            CreateMap<IndividualCustomer, UpdateIndividualCustomerCommand>().ReverseMap();
            CreateMap<IndividualCustomer, IndividualCustomerListDto>().ReverseMap();
            //CreateMap<IPaginate<IndividualCustomer>, IndividualCustomerListModel>().ReverseMap();
            CreateMap<IPaginate<IndividualCustomer>, IndividualCustomerListModel>().ReverseMap();
        }
    }
}
