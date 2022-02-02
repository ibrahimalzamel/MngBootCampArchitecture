using Application.Services.Repositories;
using Core.CrossCuttingConcerns.Exceptions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.Models.Rules
{
   
    public class ModelBusinessRules
    {
        IModelRepository _modelRepository;
        IBrandRepository _brandRepository;
        ITransmissionRepository _transmissionRepository;

        public ModelBusinessRules(IModelRepository modelRepository, 
                                  IBrandRepository brandRepository,
                                  ITransmissionRepository transmissionRepository)
        {
            _modelRepository = modelRepository;
            _brandRepository = brandRepository;
            _transmissionRepository = transmissionRepository;
        }

      
        public async Task ModelNameCanNotBeDuplicatedWhenInserted(string name)
        {
            var result = await _modelRepository.GetListAsync(m => m.Name == name);
            if (result.Items.Any())
            {
                throw new BusinessException("Model name exists");
            }
        }
        public async Task TransmissionIsExist(int trasmissionId)
        {
            // check transmission id from transmission id
            
         
            var result = await _modelRepository.GetListAsync(m => m.TransmissionId ==trasmissionId );
            if (result.Items.Any())
            {
                throw new BusinessException("Model name exists");
            }
        }

        public async Task FuelIsExist(int fuelId)
        {
            // check fuel id from fuel repo
            var result = await _modelRepository.GetListAsync(m => m.FuelId == fuelId);
            if (result.Items.Any())
            {
                throw new BusinessException("Brand name exists");
            }
        }

        public async Task BrandIsExist(int brandId)
        {
            // check Brand id from Brand repo (Result)
            var result = await _modelRepository.GetListAsync(m => m.Id == brandId);
            if (result == null)
            {
                throw new BusinessException("Brand name dosent exist");
            }
        }
        public Task DailyPriceCheck(double price)
        {
            if (price < 0)
            {
                throw new BusinessException("Model daily price out of range");
            }
            return Task.CompletedTask;
        }
    }
}
