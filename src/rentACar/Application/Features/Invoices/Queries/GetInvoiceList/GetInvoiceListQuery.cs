using Application.Features.Invoices.Models;
using Application.Services.Repositories;
using AutoMapper;
using Core.Application.Requests;
using Core.Utilities.DataResults;
using Core.Utilities.Messages;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.Invoices.Queries.GetInvoiceList
{
    public class GetInvoiceListQuery : IRequest<IDataResult<InvoiceListModel>>
    {
        public PageRequest PageRequest { get; set; }

        public class GetInvoiceListQueryHandler : IRequestHandler<GetInvoiceListQuery, IDataResult<InvoiceListModel>>
        {
            IInvoiceRepository _invoiceRepository;
            IMapper _mapper;

            public GetInvoiceListQueryHandler(IInvoiceRepository invoiceRepository, IMapper mapper)
            {
                _invoiceRepository = invoiceRepository;
                _mapper = mapper;
            }

            public async Task<IDataResult<InvoiceListModel>> Handle(GetInvoiceListQuery request, CancellationToken cancellationToken)
            {
                var invoices = await _invoiceRepository.GetListAsync(
                    index: request.PageRequest.Page,
                    size: request.PageRequest.PageSize);

                var mappedInvoices = _mapper.Map<InvoiceListModel>(invoices);
                return new SuccessDataResult<InvoiceListModel>(mappedInvoices, SuccessMessages.BrandsListed);
            }
        }
    }
}
