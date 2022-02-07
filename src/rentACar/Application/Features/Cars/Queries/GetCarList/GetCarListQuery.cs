using Application.Features.Cars.Dtos;
using Application.Features.Cars.Models;
using Application.Features.Cars.Rules;
using Application.Services.Repositories;
using AutoMapper;
using Core.Application.Requests;
using Core.Utilities.DataResults;
using Core.Utilities.Messages;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.Cars.Queries.GetCarList
{
    public class GetCarListQuery : IRequest<IDataResult<CarListModel>>
    {
        public PageRequest PageRequest { get; set; }

        public class GetCarListQueryHandler : IRequestHandler<GetCarListQuery, IDataResult<CarListModel>>
        {
            ICarRepository _carRepository;
            IMapper _mapper;

            public GetCarListQueryHandler(ICarRepository carRepository, IMapper mapper)
            {
                _carRepository = carRepository;
                _mapper = mapper;
            }

            public async Task<IDataResult<CarListModel>> Handle(GetCarListQuery request, CancellationToken cancellationToken)
            {
                var cars = await _carRepository.GetListAsync(
                    index: request.PageRequest.Page,
                    size: request.PageRequest.PageSize);
               // var mappedBrands = _mapper.Map<BrandListModel>(brands);
                var mappedCars = _mapper.Map<CarListModel>(cars);
                return new SuccessDataResult<CarListModel>(mappedCars, SuccessMessages.CarsListed);
            }
           

        }
    }
}