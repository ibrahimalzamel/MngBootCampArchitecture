using Application.Features.Models.Commands.CreateModel;
using Application.Features.Models.Commands.DeleteModel;
using Application.Features.Models.Commands.UpdateModel;
using Application.Features.Models.Queries.GetModelList;
using Core.Application.Requests;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    
    public class ModelsController : BaseController
    {
        [HttpPost("add")]
        public async Task<IActionResult> Add([FromBody] CreateModelCommand createModelCommand)
        {
            var result = await Mediator.Send(createModelCommand);
            return Created("", result);
        }
        [HttpPut("update")]
        public async Task<IActionResult> Update([FromBody] UpdateModelCommand updateCarCommand)
        {
            var result = await Mediator.Send(updateCarCommand);
            return Ok(result);
        }
        [HttpDelete("delete")]
        public async Task<IActionResult> Delete([FromBody] DeleteModelCommand deleteCarCommand)
        {
            var result = await Mediator.Send(deleteCarCommand);
            return Ok(result);
        }
        [HttpGet("getall")]
        public async Task<IActionResult> GetAll([FromQuery] PageRequest pageRequest)
        {
            var query = new GetModelListQuery();
            query.PageRequest = pageRequest;
            var result = await Mediator.Send(query);
            return Ok(result);
        }
    }
}
