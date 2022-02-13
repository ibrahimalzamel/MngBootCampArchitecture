﻿using Application.Services.Repositories;
using Core.CrossCuttingConcerns.Exceptions;
using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Services.FindeksCreditRateService
{
    internal class FindeksCreditRateManager : IFindeksCreditRateService
    {
        private readonly IFindeksCreditRateRepository _findeksCreditRateRepository;

        public FindeksCreditRateManager(IFindeksCreditRateRepository findeksCreditRateRepository)
        {
            _findeksCreditRateRepository = findeksCreditRateRepository;
        }

        public async Task<FindeksCreditRate> GetFindeksCreditRateByCustomerId(int customerId)
        {
            FindeksCreditRate findeksCreditRate =
                await _findeksCreditRateRepository.GetAsync(f => f.CustomerId == customerId);
            if (findeksCreditRate == null) throw new BusinessException("Customer's findeks score do not exists.");
            return findeksCreditRate;
        }
    }
}