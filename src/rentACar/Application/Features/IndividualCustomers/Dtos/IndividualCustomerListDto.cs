namespace Application.Features.IndividualCustomers.Dtos;

public class IndividualCustomerListDto
{
    public int Id { get; set; }
    public int CustomerId { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }  
    public string NationalId { get; set; }

}