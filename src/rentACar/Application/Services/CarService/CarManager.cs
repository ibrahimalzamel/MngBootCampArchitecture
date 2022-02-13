using Application.Services.Repositories;
using Core.CrossCuttingConcerns.Exceptions;
using Domain.Entities;
using Domain.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Services.CarService
{
    public class CarManager : ICarService
    {
        private readonly ICarRepository _carRepository;

        public CarManager(ICarRepository carRepository)
        {
            _carRepository = carRepository;
        }

        public async Task<Car> GetById(int id)
        {
            Car car = await _carRepository.GetAsync(c => c.Id == id);
            if (car == null) throw new BusinessException("The car doesn't exist.");
            return car;
        }

        public async Task<Car> PickUpCar(Rental rental)
        {
            Car carToBeUpdate = await _carRepository.GetAsync(c => c.Id == rental.CarId);
            carToBeUpdate.Kilometer += Convert.ToInt32(rental.RentEndKilometer - rental.RentStartKilometer);
            carToBeUpdate.CarState = CarState.Avaliable;
            Car updatedCar = await _carRepository.UpdateAsync(carToBeUpdate);
            return updatedCar;
        }
    }

}
