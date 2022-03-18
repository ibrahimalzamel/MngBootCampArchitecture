using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace Core.CrossCuttingConcerns.Exceptions
{

    // Don't repeat yourself
    public class BusinessException : Exception
    {
        public BusinessException(string message) : base(message)
        {

        }
    }
}