import { Brand } from '../models/brand';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from 'src/app/core/models/listResponseModel';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiControllerUrl = `${environment.apiUrl}/brands`;

  constructor(private httpClient: HttpClient) {}

  getList(page: number = 0, pageSize: number = 10): Observable<ListResponseModel<Brand>> {
    return this.httpClient.get<ListResponseModel<Brand>>(`${this.apiControllerUrl}`, {
      params: { page, pageSize }
    });
  }

  getById(id: number): Observable<Brand> {
    return this.httpClient.get<Brand>(`${this.apiControllerUrl}/${id}`);
  }
}
