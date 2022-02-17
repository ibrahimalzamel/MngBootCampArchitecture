
using Application.Features.RentalBranches.Dtos;
using Application.Features.RentalBranches.Models;
using Application.Features.RentalBranchs.Commands.CreateRentalBranch;
using Application.Features.RentalBranchs.Commands.DeleteRentalBranch;
using Application.Features.RentalBranchs.Commands.UpdateRentalBranch;
using AutoMapper;
using Core.Persistence.Paging;
using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.RentalBranchs.Profiles
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<RentalBranch, CreateRentalBranchCommand>().ReverseMap();
            CreateMap<RentalBranch, CreatedRentalBranchDto>().ReverseMap();
            CreateMap<RentalBranch, UpdateRentalBranchCommand>().ReverseMap();
            CreateMap<RentalBranch, UpdatedRentalBranchDto>().ReverseMap();
            CreateMap<RentalBranch, DeleteRentalBranchCommand>().ReverseMap();
            CreateMap<RentalBranch, DeletedRentalBranchDto>().ReverseMap();
            CreateMap<RentalBranch, RentalBranchDto>().ReverseMap();
            CreateMap<RentalBranch, RentalBranchListDto>().ReverseMap();
            CreateMap<IPaginate<RentalBranch>, RentalBranchListModel>().ReverseMap();
        }
    }
}
