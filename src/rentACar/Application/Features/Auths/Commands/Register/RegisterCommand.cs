using Application.Features.Auths.Dtos;
using Application.Features.Auths.Rules;
using Application.Services.AuthService;
using Application.Services.Repositories;
using AutoMapper;
using Core.Security.Dtos;
using Core.Security.Entities;
using Core.Security.Hashing;
using Core.Security.Jwt;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.Auths.Commands.Register
{

    public class RegisterCommand : IRequest<CreateUserDto>
    {
        public UserForRegisterDto UserForRegisterDto { get; set; }
        public string IPAddress { get; set; }

        public class RegisterCommandHandler : IRequestHandler<RegisterCommand, CreateUserDto>
        {
            private readonly IUserRepository _userRepository;
            private readonly IAuthService _authService;
            private readonly AuthBusinessRules _authBusinessRules;
            private readonly IMapper _mapper;

            public RegisterCommandHandler(IUserRepository userRepository, IAuthService authService,
                                          AuthBusinessRules authBusinessRules, IMapper mapper)
            {
                _userRepository = userRepository;
                _authService = authService;
                _authBusinessRules = authBusinessRules;
                _mapper = mapper;

            }

            public async Task<CreateUserDto> Handle(RegisterCommand request, CancellationToken cancellationToken)
            {
                var userToAdd = _mapper.Map<User>(request.UserForRegisterDto);

              //  await _authBusinessRules.UserEmailShouldBeNotExists(request.UserForRegisterDto.Email);

                byte[] passwordHash, passwordSalt;
                HashingHelper.CreatePasswordHash(request.UserForRegisterDto.Password, out passwordHash, out passwordSalt);
                userToAdd.PasswordSalt = passwordSalt;
                userToAdd.PasswordHash = passwordHash;
                userToAdd.Status = true;

                var createdUser = await _userRepository.AddAsync(userToAdd);
                var userToReturn = _mapper.Map<CreateUserDto>(createdUser);
                return userToReturn;
            }
        }
    }
}
