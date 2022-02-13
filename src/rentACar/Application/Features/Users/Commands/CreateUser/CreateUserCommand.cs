using Application.Features.Users.Dtos;
using Application.Features.Users.Rules;
using Application.Services.Repositories;
using AutoMapper;
using Core.Application.Pipelines.Logging;
using Core.Security.Entities;
using Core.Security.Hashing;
using MediatR;

namespace Application.Features.Users.Commands.CreateUser;

public class CreateUserCommand : IRequest<CreatedUserDto>,ILoggableRequest
{
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Email { get; set; }
    public string Password { get; set; }

    public class CreateUserCommandHandler : IRequestHandler<CreateUserCommand, CreatedUserDto>
    {
        private readonly IUserRepository _userRepository;
        private readonly IMapper _mapper;
        private readonly UserBusinessRules _userBusinessRules;

        public CreateUserCommandHandler(IUserRepository userRepository, IMapper mapper,
                                        UserBusinessRules userBusinessRules)
        {
            _userRepository = userRepository;
            _mapper = mapper;
            _userBusinessRules = userBusinessRules;
        }

        public async Task<CreatedUserDto> Handle(CreateUserCommand request, CancellationToken cancellationToken)
        {
            User mappedUser = _mapper.Map<User>(request);

            byte[] passwordHash, passwordSalt;
            HashingHelper.CreatePasswordHash(request.Password, out passwordHash, out passwordSalt);
            mappedUser.PasswordHash = passwordHash;
            mappedUser.PasswordSalt = passwordSalt;

            User createdUser = await _userRepository.AddAsync(mappedUser);
            CreatedUserDto createdUserDto = _mapper.Map<CreatedUserDto>(createdUser);
            return createdUserDto;



           // await _colorBusinessRules.ColorNameCanNotBeDuplicatedWhenInserted(request.Name);
            //Color mappedColor = _mapper.Map<Color>(request);
            //await _colorRepository.AddAsync(mappedColor);
            //return new SuccessResult(SuccessMessages.ColorAdded);
        }
    }
}
