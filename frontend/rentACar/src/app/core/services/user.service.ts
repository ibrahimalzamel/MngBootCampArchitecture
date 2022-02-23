import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { UserDetailUpdateModel } from '../models/userDetailUpdateModel';
import { UserForRegisterDto } from '../models/userForRegisterDto';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiControllerUrl = `${environment.apiUrl}/users`;

  constructor(private httpClient: HttpClient) {}

  getUserDetailByEmail(
    userMail: string
  ): Observable<ListResponseModel<UserForRegisterDto>> {
    return this.httpClient.get<ListResponseModel<UserForRegisterDto>>(
      `${this.apiControllerUrl}/getuserdetailbymail`,
      {
        params: {
          userMail: userMail,
        },
      }
    );
  }

  updateUserDetails(
    userDetailUpdateModel: UserDetailUpdateModel
  ): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      `${this.apiControllerUrl}/updateuserdetails`,
      userDetailUpdateModel
    );
  }
}
