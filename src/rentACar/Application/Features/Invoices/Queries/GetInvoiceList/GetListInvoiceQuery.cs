using Application.Features.Invoices.Models;
using Application.Services.Repositories;
using AutoMapper;
using Core.Application.Requests;
using Core.Persistence.Paging;
using Core.Utilities.DataResults;
using Core.Utilities.Messages;
using Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.Invoices.Queries.GetInvoiceList
{
    public class GetListInvoiceQuery : IRequest<InvoiceListModel>
    {
        public PageRequest PageRequest { get; set; }

        public class GetListInvoiceQueryHandler : IRequestHandler<GetListInvoiceQuery, InvoiceListModel>
        {
            private readonly IInvoiceRepository _invoiceRepository;
            private readonly IMapper _mapper;

            public GetListInvoiceQueryHandler(IInvoiceRepository invoiceRepository, IMapper mapper)
            {
                _invoiceRepository = invoiceRepository;
                _mapper = mapper;
            }

            public async Task<InvoiceListModel> Handle(GetListInvoiceQuery request, CancellationToken cancellationToken)
            {
                IPaginate<Invoice> invoices = await _invoiceRepository.GetListAsync(index: request.PageRequest.Page,
                                                  size: request.PageRequest.PageSize);
                InvoiceListModel mappedInvoiceListModel = _mapper.Map<InvoiceListModel>(invoices);
                return mappedInvoiceListModel;
            }
        }
    }
}
