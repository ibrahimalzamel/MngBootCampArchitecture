using Application.Features.Fuels.Commands.CreateFuel;
using Application.Features.Fuels.Commands.DeleteFuel;
using Application.Features.Fuels.Commands.UpdateFuel;
using Application.Features.Fuels.Dtos;
using Application.Features.Fuels.Models;
using AutoMapper;
using Core.Persistence.Paging;
using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.Fuels.Profiles
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Fuel, CreateFuelCommand>().ReverseMap();
            CreateMap<Fuel, DeleteFuelCommand>().ReverseMap();
            CreateMap<Fuel, UpdateFuelCommand>().ReverseMap();
            CreateMap<Fuel, FuelListDto>().ReverseMap();
            CreateMap<Fuel, FuelDto>().ReverseMap();
            CreateMap<Fuel, CreatedFuelDto>().ReverseMap();
            CreateMap<Fuel, DeletedFuelDto>().ReverseMap();
            CreateMap<Fuel, UpdatedFuelDto>().ReverseMap();
            CreateMap<IPaginate<Fuel>, FuelListModel>().ReverseMap();
        }
    }
}
