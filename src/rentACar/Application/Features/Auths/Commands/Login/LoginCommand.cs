using Application.Features.Auths.Dtos;
using Application.Features.Auths.Rules;
using Application.Services.AuthService;
using Application.Services.Repositories;
using Application.Services.UserService;
using Core.CrossCuttingConcerns.Exceptions;
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

namespace Application.Features.Auths.Commands.Login
{
    public class LoginCommand : IRequest<LoginUserDto>
    {
        public UserForLoginDto UserForLoginDto { get; set; }
        public string IPAddress { get; set; }

        public class LoginCommandHandler : IRequestHandler<LoginCommand, LoginUserDto>
        {
            private readonly IUserService _userService;
            private readonly IAuthService _authService;
            private readonly AuthBusinessRules _authBusinessRules;
            private readonly IUserRepository _userRepository;

            public LoginCommandHandler(IUserRepository userRepository,IUserService userService, IAuthService authService,
                                       AuthBusinessRules authBusinessRules )
            {
                _userService = userService;
                _authService = authService;
                _authBusinessRules = authBusinessRules;
                _userRepository = userRepository;   
            }

            public async Task<LoginUserDto> Handle(LoginCommand request, CancellationToken cancellationToken)
            {
                var userToCheck = await _userRepository.GetAsync(u => u.Email == request.UserForLoginDto.Email);
                if (userToCheck == null)
                {
                    throw new BusinessException("UserNotFound");
                }

                if (!HashingHelper.VerifyPasswordHash(request.UserForLoginDto.Password,
                  userToCheck.PasswordHash, userToCheck.PasswordSalt))
                {
                    throw new BusinessException("PasswordError");
                }
                //var user = await _userService.GetByEmail(request.UserForLoginDto.Email);

                //await _authBusinessRules.UserShouldBeExists(user);
                //await _authBusinessRules.UserPasswordShouldBeMatch(user.Id, request.UserForLoginDto.Password);

                //AccessToken createdAccessToken = await _authService.CreateAccessToken(user);

                //RefreshToken createdRefreshToken = await _authService.CreateRefreshToken(user, request.IPAddress);
                //RefreshToken addedRefreshToken = await _authService.AddRefreshToken(createdRefreshToken);
                //await _authService.DeleteOldRefreshTokens(user.Id);

                //AuthenticateTokensDto authenticateTokensDto = new()
                //{ AccessToken = createdAccessToken, RefreshToken = addedRefreshToken };
                var accessToken = await _authService.CreateAccessToken(userToCheck);

                return new LoginUserDto
                {
                    AccessToken = accessToken
                };
            }
        }
    }
}
