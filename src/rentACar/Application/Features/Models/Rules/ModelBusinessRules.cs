using Application.Services.Repositories;
using Core.CrossCuttingConcerns.Exceptions;
using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.Models.Rules
{

    public class ModelBusinessRules
    {
        private readonly IModelRepository _modelRepository;

        public ModelBusinessRules(IModelRepository modelRepository)
        {
            _modelRepository = modelRepository;
        }

        public async Task ModelIdShouldExistWhenSelected(int id)
        {
            Model? result = await _modelRepository.GetAsync(c => c.Id == id);
            if (result == null) throw new BusinessException("Model not exists.");
        }
    }
}
