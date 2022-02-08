using Application.Features.Rentals.Commands.CreateRental;
using Application.Features.Rentals.Commands.DeleteRental;
using Application.Features.Rentals.Commands.UpdateRental;
using Application.Features.Rentals.Dtos;
using Application.Features.Rentals.Models;
using AutoMapper;
using Core.Persistence.Paging;
using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.Rentals.Profiles
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Rental, CreateRentalCommand>().ReverseMap();
            CreateMap<Rental, DeleteRentalCommand>().ReverseMap();
            CreateMap<Rental, UpdateRentalCommand>().ReverseMap();
            CreateMap<Rental, RentalListDto>().ForMember(c => c.ModelName, opt => opt.MapFrom(c => c.Car.Model.Name))
                                              .ForMember(c => c.Plate, opt => opt.MapFrom(c => c.Car.Plate))
                                              .ForMember(c => c.Fule, opt => opt.MapFrom(c => c.Car.Model.Fuel.Name))
                                              .ForMember(c => c.ModelYear, opt => opt.MapFrom(c => c.Car.ModelYear))
                                              .ForMember(c => c.CustomerName, opt => opt.MapFrom(c => c.Customer.IndividualCustomer.FirstName))
                                              .ForMember(c => c.ColorName, opt => opt.MapFrom(c => c.Car.Color.Name))
                                              .ForMember(c => c.RentEndDate, opt => opt.MapFrom(c => c.RentEndDate))
                                              .ForMember(c => c.RentStartDate, opt => opt.MapFrom(c => c.RentStartDate))
                                              .ForMember(c => c.ReturnDate, opt => opt.MapFrom(c => c.ReturnDate))  ;

            /*
               public string ColorName { get; set; }
        public string ModelName { get; set; }
        public string Fule { get; set; }
        public string Plate { get; set; }
        public short ModelYear { get; set; }
        public int CustomerName { get; set; }
        public DateTime RentStartDate { get; set; }
        public DateTime RentEndDate { get; set; }
        public DateTime? ReturnDate { get; set; }*/
            CreateMap<IPaginate<Rental>, RentalListModel>().ReverseMap();
        }
    }
}
