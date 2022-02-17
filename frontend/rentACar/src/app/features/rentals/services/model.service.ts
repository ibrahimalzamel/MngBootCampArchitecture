import { HttpClient, HttpResponse } from '@angular/common/http';

import { CreatedModelDto } from '../models/createdModelDto';
import { DeletedModelDto } from '../models/deletedModelDto';
import { Injectable } from '@angular/core';
import { ListResponseModel } from './../../../core/models/listResponseModel';
import { Model } from '../models/model';
import { ModelListModel } from './../models/modelListModel';
import { Observable } from 'rxjs';
import { UpdatedModelDto } from '../models/updatedModelDto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ModelService {
  apiControllerUrl = `${environment.apiUrl}/models`;

  constructor(private httpClient: HttpClient) {}

  getList(page: number = 0, pageSize: number = 10): Observable<ListResponseModel<ModelListModel>> {
    return this.httpClient.get<ListResponseModel<ModelListModel>>(`${this.apiControllerUrl}`, {
      params: { page, pageSize }
    });
  }

  getById(id: number): Observable<Model> {
    return this.httpClient.get<Model>(`${this.apiControllerUrl}/${id}`);
  }

  add(model: Model): Observable<CreatedModelDto> {
    return this.httpClient.post<CreatedModelDto>(`${this.apiControllerUrl}`, model);
  }

  update(model: Model): Observable<UpdatedModelDto> {
    return this.httpClient.put<UpdatedModelDto>(`${this.apiControllerUrl}`, model);
  }

  delete(model: Model): Observable<DeletedModelDto> {
    return this.httpClient.delete<DeletedModelDto>(`${this.apiControllerUrl}`, { body: model });
  }
}
