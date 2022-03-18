import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateCorporateCustomerDto } from 'src/app/shared/dtos/createCorporateCustomerDto';
import { CorporateCustomer } from 'src/app/shared/models/corporateCustomer';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CorporateCustomerService {
  apiControllerUrl = `${environment.apiUrl}/CorporateCustomers`;

  constructor(private httpClient: HttpClient) {}

  getByCustomerId(customerId: number): Observable<CorporateCustomer> {
    return this.httpClient.get<CorporateCustomer>(
      `${this.apiControllerUrl}/ByCustomerId/${customerId}`
    );
  }

  add(createIndividualCustomerDto: CreateCorporateCustomerDto): Observable<CorporateCustomer> {
    return this.httpClient.post<CorporateCustomer>(
      this.apiControllerUrl,
      createIndividualCustomerDto
    );
  }
}
