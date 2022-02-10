using Core.Security.Entities;
using Core.Security.Jwt;

namespace Core.Security.JWT;

public interface ITokenHelper
{
    Task <AccessToken> CreateToken(User user, List<OperationClaim> operationClaims);
}