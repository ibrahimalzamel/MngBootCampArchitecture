﻿using Application.Features.Cars.Commands.CreateCar;
using Application.Features.Cars.Commands.DeleteCar;
using Application.Features.Cars.Commands.UpdateCar;
using Application.Features.Cars.Dtos;
using Application.Features.Cars.Models;
using AutoMapper;
using Core.Persistence.Paging;
using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.Cars.Profiles
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Car, CreateCarCommand>().ReverseMap();
            CreateMap<Car, CreatedCarDto>().ForMember(c => c.ColorName, opt => opt.MapFrom(c => c.Color.Name))
                                           .ForMember(c => c.ModelName, opt => opt.MapFrom(c => c.Model.Name))
                                           .ForMember(c => c.BrandName, opt => opt.MapFrom(c => c.Model.Brand.Name))
                                           .ForMember(c => c.FuelName, opt => opt.MapFrom(c => c.Model.Fuel.Name))
                                           .ReverseMap();

            CreateMap<Car, UpdateCarCommand>().ReverseMap();
            CreateMap<Car, UpdatedCarDto>().ForMember(c => c.ColorName, opt => opt.MapFrom(c => c.Color.Name))
                                           .ForMember(c => c.ModelName, opt => opt.MapFrom(c => c.Model.Name))
                                           .ForMember(c => c.BrandName, opt => opt.MapFrom(c => c.Model.Brand.Name));

            CreateMap<Car, DeleteCarCommand>().ReverseMap();

            CreateMap<Car, DeletedCarDto>()
                .ForMember(c => c.ModelName, opt => opt.MapFrom(c => c.Model.Name))
                .ForMember(c => c.BrandName, opt => opt.MapFrom(c => c.Model.Brand.Name));

            CreateMap<Car, CarDto>().ForMember(c => c.ColorName, opt => opt.MapFrom(c => c.Color.Name))
                                    .ForMember(c => c.ModelName, opt => opt.MapFrom(c => c.Model.Name))
                                    .ForMember(c => c.BrandName, opt => opt.MapFrom(c => c.Model.Brand.Name));


            CreateMap<Car, CarListDto>().ForMember(c => c.ColorName, opt => opt.MapFrom(c => c.Color.Name))
                                        .ForMember(c => c.ModelName, opt => opt.MapFrom(c => c.Model.Name))
                                        .ForMember(c => c.FuelName, opt => opt.MapFrom(c => c.Model.Fuel.Name))
                                        .ForMember(c => c.CarState, opt => opt.MapFrom(c => c.CarState))
                                        .ForMember(c => c.Kilometer, opt => opt.MapFrom(c => c.Kilometer))
                                        .ForMember(c => c.ModelYear, opt => opt.MapFrom(c => c.ModelYear))
                                        .ForMember(c => c.Plate, opt => opt.MapFrom(c => c.Plate))
                                        .ForMember(c => c.MinFindeksCreditRate, opt => opt.MapFrom(c => c.MinFindeksCreditRate))
                                        .ForMember(c => c.RentalBranchCity, opt => opt.MapFrom(c => c.RentalBranch.City))
                                        .ForMember(c => c.BrandName, opt => opt.MapFrom(c => c.Model.Brand.Name));

            CreateMap<IPaginate<Car>, CarListModel>().ReverseMap();

        }
    }
}
