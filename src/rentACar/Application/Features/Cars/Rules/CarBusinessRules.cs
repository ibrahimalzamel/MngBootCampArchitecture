using Application.Services.Repositories;
using Core.CrossCuttingConcerns.Exceptions;
using Domain.Entities;
using Domain.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.Cars.Rules
{
   
    public class CarBusinessRules
    {
        ICarRepository _carRepository;

        public CarBusinessRules(ICarRepository carRepository)
        {
            _carRepository = carRepository;
        }
        //Gerkhin dili 
        public async Task CarNameCanNotBeDuplicatedWhenInserted(string plate)
        {
            var result = await _carRepository.GetListAsync(b => b.Plate == plate);
            if (result.Items.Any())
            {
                throw new BusinessException("car Plate exists");
            }
        }
       
        public async Task ColorIsExist(int colorId)
        {
            // check Color id from Color repo (Result)
            var result = await _carRepository.GetListAsync(m => m.ColorId == colorId);
            if (result == null)
            {
                throw new BusinessException("Car ColorId dosent exist");
            }
        }
        public async Task ModelIsExist(int modelId)
        {
            // check Model id from Model repo (Result)
            var result = await _carRepository.GetListAsync(m => m.ModelId == modelId);
            if (result == null)
            {
                throw new BusinessException("Car ModelId dosent exist");
            }
        }
        //        public short ModelYear { get; set; }
        public async Task ModelYearIsExist(short modelYear)
        {
            // check Model id from Model repo (Result)
            var result = await _carRepository.GetListAsync(m => m.ModelYear == modelYear);
            if (result == null)
            {
                throw new BusinessException("Car ModelYear dosent exist");
            }
        }
        public async Task CarIdShouldExistWhenSelected(int id)
        {
            Car? result = await _carRepository.GetAsync(c => c.Id == id);
            if (result == null) throw new BusinessException("Car not exists.");
        }

        public async Task CarCanNotBeMaintainWhenIsRented(int id)
        {
            Car? car = await _carRepository.GetAsync(c => c.Id == id);
            if (car!.CarState == CarState.Rented) throw new BusinessException("Car can't be maintain when is rented.");
        }

        public async Task CarCanNotBeRentWhenIsInMaintenance(int carId)
        {
            Car? car = await _carRepository.GetAsync(c => c.Id == carId);
            if (car!.CarState == CarState.Maintenance)
                throw new BusinessException("Car can not be rent when is in maintenance.");
        }

        public async Task CarCanNotBeRentWhenIsRented(int carId)
        {
            Car? car = await _carRepository.GetAsync(c => c.Id == carId);
            if (car!.CarState == CarState.Rented)
                throw new BusinessException("Car can not be rent when is rented.");
        }
    }
}
