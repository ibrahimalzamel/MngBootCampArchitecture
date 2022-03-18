using Application.Features.IndividualCustomers.Commands.CreateIndividualCustomer;
using Application.Features.IndividualCustomers.Commands.DeleteIndividualCustomer;
using Application.Features.IndividualCustomers.Commands.UpdateIndividualCustomer;
using Application.Features.IndividualCustomers.Dtos;
using Application.Features.IndividualCustomers.Models;
using Application.Features.IndividualCustomers.Queries.GetByCustomerIdIndividualCustomer;
using Application.Features.IndividualCustomers.Queries.GetByIdIndividualCustomer;
using Application.Features.IndividualCustomers.Queries.GetIndividualCustomerList;
using Core.Application.Requests;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IndividualCustomersController : BaseController
    {
        [HttpGet("{Id}")]
        public async Task<IActionResult> GetById([FromRoute] GetByIdIndividualCustomerQuery getByIdIndividualCustomerQuery)
        {
            IndividualCustomerDto result = await Mediator.Send(getByIdIndividualCustomerQuery);
            return Ok(result);
        }

        [HttpGet("ByCustomerId/{CustomerId}")]
        public async Task<IActionResult> GetById(
            [FromRoute] GetByCustomerIdIndividualCustomerQuery getByCustomerIdIndividualCustomerQuery)
        {
            IndividualCustomerDto result = await Mediator.Send(getByCustomerIdIndividualCustomerQuery);
            return Ok(result);
        }

        [HttpGet]
        public async Task<IActionResult> GetList([FromQuery] PageRequest pageRequest)
        {
            GetIndividualCustomerListQuery getListIndividualCustomerQuery = new() { PageRequest = pageRequest };
            IndividualCustomerListModel result = await Mediator.Send(getListIndividualCustomerQuery);
            return Ok(result);
        }

        [HttpPost]
        public async Task<IActionResult> Add([FromBody] CreateIndividualCustomerCommand createIndividualCustomerCommand)
        {
            CreatedIndividualCustomerDto result = await Mediator.Send(createIndividualCustomerCommand);
            return Created("", result);
        }

        [HttpPut]
        public async Task<IActionResult> Update([FromBody] UpdateIndividualCustomerCommand updateIndividualCustomerCommand)
        {
            UpdatedIndividualCustomerDto result = await Mediator.Send(updateIndividualCustomerCommand);
            return Ok(result);
        }

        [HttpDelete]
        public async Task<IActionResult> Delete([FromBody] DeleteIndividualCustomerCommand deleteIndividualCustomerCommand)
        {
            DeletedIndividualCustomerDto result = await Mediator.Send(deleteIndividualCustomerCommand);
            return Ok(result);
        }
    }
}
