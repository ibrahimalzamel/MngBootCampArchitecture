import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ListResponseModel } from 'src/app/core/models/listReponseModel';
import { Observable } from 'rxjs';
import { ModelListModel } from '../models/modelListModel';
@Injectable({
  providedIn: 'root'
})
export class ModelService {
  apiUrl = "http://localhost:5029/api/Models/"
  constructor(private httpClient : HttpClient) { }
  getModels(page : number , size : number):Observable<ListResponseModel<ModelListModel>>{
    let newPath = this.apiUrl +"getAll?Page="+page+"&PageSize="+size;
    return this.httpClient.get<ListResponseModel<ModelListModel>>(newPath);

  }


}
