import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Color } from '../models/color';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/core/models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiControllerUrl = `${environment.apiUrl}/colors`;

  constructor(private httpClient: HttpClient) { }

  getList(page:number=0, pageSize:number=10):
  Observable<ListResponseModel<Color>>{
    return this.httpClient
    .get<ListResponseModel<Color>>(`${this.apiControllerUrl}`, {
      params: { page, pageSize }
    });
  }
  getById(id: number): Observable<Color> {
    return this.httpClient.get<Color>(`${this.apiControllerUrl}/${id}`);
  }
}
