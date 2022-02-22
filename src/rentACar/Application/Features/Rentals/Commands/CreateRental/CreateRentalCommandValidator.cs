using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.Rentals.Commands.CreateRental
{
    public class CreateRentalCommandValidator : AbstractValidator<CreateRentalCommand>
    {
        public CreateRentalCommandValidator()
        {
            RuleFor(c => c.RentStartDate)
                .GreaterThan(DateTime.Now)
                .LessThan(c => c.RentEndDate);
            RuleFor(c => c.RentEndDate)
                .GreaterThan(c => c.RentStartDate);
        }
    }
}
