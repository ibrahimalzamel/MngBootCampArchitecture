using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

//Kesişen kaygılar
namespace Core.CrossCuttingConcerns.Exceptions
{

    // İş İstisnası
    public class BusinessException : Exception
    {
        public BusinessException(string message) : base(message)
        {

        }
    }
}