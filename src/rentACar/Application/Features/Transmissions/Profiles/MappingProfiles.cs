using Application.Features.Transmissions.Commands.CreateTransmission;
using Application.Features.Transmissions.Commands.DeleteTransmission;
using Application.Features.Transmissions.Commands.UpdateTransmission;
using Application.Features.Transmissions.Dtos;
using Application.Features.Transmissions.Models;
using AutoMapper;
using Core.Persistence.Paging;
using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.Transmissions.Profiles
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Transmission, CreateTransmissionCommand>().ReverseMap();
            CreateMap<Transmission, CreatedTransmissionDto>().ReverseMap();
            CreateMap<Transmission, UpdateTransmissionCommand>().ReverseMap();
            CreateMap<Transmission, UpdatedTransmissionDto>().ReverseMap();
            CreateMap<Transmission, DeleteTransmissionCommand>().ReverseMap();
            CreateMap<Transmission, DeletedTransmissionDto>().ReverseMap();
            CreateMap<Transmission, TransmissionDto>().ReverseMap();
            CreateMap<Transmission, TransmissionListDto>().ReverseMap();
            CreateMap<IPaginate<Transmission>, TransmissionListModel>().ReverseMap();
        }
    }
}
