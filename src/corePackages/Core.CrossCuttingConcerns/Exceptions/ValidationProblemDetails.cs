using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace Core.CrossCuttingConcerns.Exceptions
{
    //Don't repeat yourself
    public class ValidationProblemDetails : ProblemDetails
    {
        public object Errors { get; set; }
        public override string ToString()
        {
            return JsonConvert.SerializeObject(this);

        }
    }
}
