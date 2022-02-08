using Application.Features.Customers.IndividualCustomers.Dtos;
using Core.Persistence.Paging;

namespace Application.Features.Customers.IndividualCustomers.Models
{
    public class IndividualCustomerListModel : BasePageableModel
    {
        public IList<IndividualCustomerListDto> Items { get; set; }
    }
}
