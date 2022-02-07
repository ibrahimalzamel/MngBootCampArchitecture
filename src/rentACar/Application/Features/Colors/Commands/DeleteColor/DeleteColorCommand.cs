using Application.Features.Colors.Rules;
using Application.Services.Repositories;
using AutoMapper;
using Core.Utilities.DataResults;
using Core.Utilities.Messages;
using Core.Utilities.Results;
using Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.Colors.Commands.DeleteColor
{
    
   
    public class DeleteColorCommand : IRequest<IResult>
    {

        public int Id { get; set; }

        public class DeleteColorCommandHandler : IRequestHandler<DeleteColorCommand, IResult>
        {
            IColorRepository _colorRepository;

            public DeleteColorCommandHandler(IColorRepository colorRepository)
            {
                _colorRepository = colorRepository;
            }

            public async Task<IResult> Handle(DeleteColorCommand request, CancellationToken cancellationToken)
            {
                var deletedColor =await _colorRepository.GetAsync(c=>c.Id == request.Id);
                if (deletedColor==null)
                    return new ErrorResult(ErrorMessages.ColorNameAlreadyExistsError);
                
                await _colorRepository.DeleteAsync(deletedColor);
                return new SuccessResult( SuccessMessages.ColorDeleted);
            }
        }

    }
}
