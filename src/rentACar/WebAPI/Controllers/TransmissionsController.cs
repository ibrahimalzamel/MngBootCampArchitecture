using Application.Features.Models.Queries.GetModelList;
using Application.Features.Transmissions.Commands.CreateTransmission;
using Application.Features.Transmissions.Commands.DeleteTransmission;
using Application.Features.Transmissions.Commands.UpdateTransmission;
using Core.Application.Requests;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TransmissionsController : BaseController
    {
        [HttpPost("add")]
        public async Task<IActionResult> Add([FromBody] CreateTransmissionCommand createTransmissionCommand)
        {
            var result = await Mediator.Send(createTransmissionCommand);
            return Created("", result);
        }
        [HttpPut("update")]
        public async Task<IActionResult> Update([FromBody] UpdateTransmissionCommand updateCarCommand)
        {
            var result = await Mediator.Send(updateCarCommand);
            return Ok(result);
        }
        [HttpDelete("delete")]
        public async Task<IActionResult> Delete([FromBody] DeleteTransmissionCommand deleteCarCommand)
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