using Application.Services.Repositories;
using Core.CrossCuttingConcerns.Exceptions;
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
        public async Task CarNameCanNotBeDuplicatedWhenInserted(string name)
        {
            var result = await _carRepository.GetListAsync(b => b.Color.Name == name);
            if (result.Items.Any())
            {
                throw new BusinessException("car name exists");
            }
        }
    }
}
