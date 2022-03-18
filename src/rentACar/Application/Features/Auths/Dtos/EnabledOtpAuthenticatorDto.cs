using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.Auths.Dtos
{
    public class EnabledOtpAuthenticatorDto
    {
        public string SecretKey { get; set; }

        public EnabledOtpAuthenticatorDto()
        {
        }

        public EnabledOtpAuthenticatorDto(string secretKey)
        {
            SecretKey = secretKey;
        }
    }
}
