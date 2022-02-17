import { Fuel } from '../models/fuel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from 'src/app/core/models/listResponseModel';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FuelService {
  apiControllerUrl = `${environment.apiUrl}/fuels`;

  constructor(private httpClient: HttpClient) {}

  getList(page: number = 0, pageSize: number = 10): Observable<ListResponseModel<Fuel>> {
    return this.httpClient.get<ListResponseModel<Fuel>>(`${this.apiControllerUrl}`, {
      params: { page, pageSize }
    });
  }

  getById(id: number): Observable<Fuel> {
    return this.httpClient.get<Fuel>(`${this.apiControllerUrl}/${id}`);
  }
}
