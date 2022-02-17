using Application.Features.Users.Dtos;
using Application.Features.Users.Rules;
using Application.Services.Repositories;
using AutoMapper;
using Core.Application.Pipelines.Logging;
using Core.Security.Dtos;
using Core.Security.Entities;
using Core.Security.Hashing;
using MediatR;

namespace Application.Features.Users.Commands.CreateUser;

public class CreateUserCommand : IRequest<CreatedUserDto>/*,ILoggableRequest*/
{
    public UserForRegisterDto UserForRegisterDto { get; set; }


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

            byte[] passwordHash, passwordSalt;
            HashingHelper.CreatePasswordHash(request.UserForRegisterDto.Password, out passwordHash, out passwordSalt);
            User newUser = new() {
            Email = request.UserForRegisterDto.Email,
            FirstName = request.UserForRegisterDto.FirstName,
            LastName = request.UserForRegisterDto.LastName, 
            PasswordHash = passwordHash,
            PasswordSalt = passwordSalt,
             Status = true
            };
            await _userBusinessRules.UserEmailShouldBeNotExists(request.UserForRegisterDto.Email);
            User createdUser = await _userRepository.AddAsync(newUser);
            CreatedUserDto createdUserDto = _mapper.Map<CreatedUserDto>(createdUser);
            return createdUserDto;

            /* await _authBusinessRules.UserEmailShouldBeExists(request.UserForLoginDto.Email);

                User? user = await _userRepository.GetAsync(u => u.Email == request.UserForLoginDto.Email);
                await _authBusinessRules.UserPasswordShouldBeMatch(user.Id, request.UserForLoginDto.Password);

                AccessToken accessToken = await _authService.CreateAccessToken(user);
                return accessToken;*/

            //await _colorBusinessRules.ColorNameCanNotBeDuplicatedWhenInserted(request.Name);
            //Color mappedColor = _mapper.Map<Color>(request);
            //await _colorRepository.AddAsync(mappedColor);
            //return new SuccessResult(SuccessMessages.ColorAdded);
        }
    }
}
