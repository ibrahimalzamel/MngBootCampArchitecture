using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.FindeksCreditRates.Commands.CreateFindeksCreditRate
{
    public class CreateFindeksCreditRateCommandValidator : AbstractValidator<CreateFindeksCreditRateCommand>
    {
        public CreateFindeksCreditRateCommandValidator()
        {
            RuleFor(f => f.Score).GreaterThanOrEqualTo(Convert.ToInt16(0)).LessThanOrEqualTo(Convert.ToInt16(1900));
        }
    }
}
