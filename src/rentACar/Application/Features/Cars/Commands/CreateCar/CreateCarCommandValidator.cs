using Application.Features.Cars.Validations;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.Cars.Commands.CreateCar
{
    public class CreateCarCommandValidator : AbstractValidator<CreateCarCommand>
    {
        public CreateCarCommandValidator()
        {
            RuleFor(c => c.ModelYear).GreaterThan((short)1900);
            //RuleFor(c => c.Plate)
            //    .NotEmpty()
            //    .Must(CarCustomValidationRules.IsTurkeyPlate)
            //    .WithMessage("Plate is not valid.");
        }
    }
}
