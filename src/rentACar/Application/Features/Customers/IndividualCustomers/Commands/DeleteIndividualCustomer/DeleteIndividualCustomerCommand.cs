using Application.Services.Repositories;
using Core.Utilities.Messages;
using Core.Utilities.Results;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.Customers.IndividualCustomers.Commands.DeleteIndividualCustomer
{
  
    public class DeleteIndividualCustomerCommand : IRequest<IResult>
    {

        public int Id { get; set; }

        public class DeleteIndividualCustomerCommandHandler : IRequestHandler<DeleteIndividualCustomerCommand, IResult>
        {
            IIndividualCustomerRepository _individualCustomerRepository;

            public DeleteIndividualCustomerCommandHandler(IIndividualCustomerRepository individualCustomerRepository)
            {
                _individualCustomerRepository = individualCustomerRepository;
            }

            public async Task<IResult> Handle(DeleteIndividualCustomerCommand request, CancellationToken cancellationToken)
            {
                var deletedIndividualCustomer = await _individualCustomerRepository.GetAsync(c => c.Id == request.Id);
                if (deletedIndividualCustomer == null)
                    return new ErrorResult(ErrorMessages.CustomerNameAlreadyExistsError);

                await _individualCustomerRepository.DeleteAsync(deletedIndividualCustomer);
                return new SuccessResult(SuccessMessages.ColorDeleted);
            }
        }

    }
}
