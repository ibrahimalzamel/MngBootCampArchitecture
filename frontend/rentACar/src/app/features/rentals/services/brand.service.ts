import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ListResponseModel } from 'src/app/core/models/listReponseModel';
import { BrandListModel } from '../models/brandListModel';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl = "http://localhost:5029/api/Brands/"
  constructor(private httpClient : HttpClient) { }


  getBrands(page : number , size : number):Observable<ListResponseModel<BrandListModel>>{
    let newPath = this.apiUrl +"getAll?Page="+page+"&PageSize="+size;
    return this.httpClient.get<ListResponseModel<BrandListModel>>(newPath);

  }

}
