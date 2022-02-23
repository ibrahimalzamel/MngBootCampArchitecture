import { Brand } from '../models/brandModels/brand';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from 'src/app/core/models/listResponseModel';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BrandListModel } from '../models/brandModels/brandListModel';
import { UpdatedBrandDto } from '../models/brandModels/updateBrandDto';
import { CreatedBrandDto } from '../models/brandModels/createdBrandDto';
import { DeletedBrandDto } from '../models/brandModels/deletedBrandDto';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiControllerUrl = `${environment.apiUrl}/brands`;
//Brands/getall?Page=0&PageSize=10
  constructor(private httpClient: HttpClient) {}

  getList(page: number = 0, pageSize: number = 10):
  Observable<ListResponseModel<BrandListModel>> {
    return this.httpClient
    .get<ListResponseModel<BrandListModel>>(`${this.apiControllerUrl}`, {
      params: { page, pageSize }
    });
  }

  getById(id: number) {
    return this.httpClient.get<Brand>(
      `${this.apiControllerUrl}/${id}`
    );
  }

  add(brand : CreatedBrandDto):Observable<CreatedBrandDto>{
    return this.httpClient.post<CreatedBrandDto>(
      `${this.apiControllerUrl}`,
       brand
    );
  }
  update(brand : UpdatedBrandDto):Observable<UpdatedBrandDto>{
    return this.httpClient.put<UpdatedBrandDto>(
      `${this.apiControllerUrl}`,
       brand
    );
  }

  delete(id : number):Observable<DeletedBrandDto>{
    return this.httpClient.delete<DeletedBrandDto>(
      `${this.apiControllerUrl}/${id}`

    );
  }
}
