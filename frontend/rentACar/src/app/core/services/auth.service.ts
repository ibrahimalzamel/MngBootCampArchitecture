import { Observable, map } from 'rxjs';
import { deleteTokenUserModel, setTokenUserModel } from './../store/auth/auth.actions';

import { CookieService } from 'ngx-cookie-service';
import { CoreStates } from './../store/core.reducer';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Store } from '@ngrx/store';
import { TokenModel } from '../models/tokenModel';
import { TokenUserModel } from './../models/tokenUserModel';
import { UserForLoginDto } from './../models/userForLoginDto';
import { UserForRegisterDto } from './../models/userForRegisterDto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiControllerUrl: string = `${environment.apiUrl}/auth`;
  tokenUserModel$: Observable<TokenUserModel | undefined> = this.store
    .select(states => states.appAuth)
    .pipe(map(state => state.tokenUserModel));

  constructor(
    private httpClient: HttpClient,
    private cookieService: CookieService,
    private store: Store<CoreStates>,
    private jwtHelperService: JwtHelperService
  ) {}

  login(userForLoginDto: UserForLoginDto): Observable<TokenModel> {
    return this.httpClient.post<TokenModel>(`${this.apiControllerUrl}/login`, userForLoginDto);
  }

  register(userForRegisterDto: UserForRegisterDto): Observable<TokenModel> {
    return this.httpClient.post<TokenModel>(
      `${this.apiControllerUrl}/register`,
      userForRegisterDto
    );
  }

  logout() {
    this.cookieService.delete('tokenModel');
    this.deleteTokenUserModel();
  }

  isAuthenticated(tokenUserModel: TokenUserModel, requiredClaims?: string[]): boolean {
    if (this.jwtHelperService.isTokenExpired()) {
      this.logout();
      return false;
    }
    if (requiredClaims && !requiredClaims.some(role => tokenUserModel.claims.includes(role)))
      return false;

    return true;
  }

  setTokenUserModel(tokenUserModel: TokenUserModel) {
    this.store.dispatch(setTokenUserModel({ tokenUserModel }));
  }

  refleshTokenUserModel() {
    const tokenUserModel: TokenUserModel | undefined = this.getTokenUserModel();
    if (!tokenUserModel) return;

    const isAuthenticated = this.isAuthenticated(tokenUserModel);
    console.log(
      '🚀 ● file: auth.service.ts ● line 66 ● AuthService ● refleshTokenUserModel ● isAuthenticated',
      isAuthenticated
    );
    if (!isAuthenticated) return;

    this.setTokenUserModel(tokenUserModel);
  }

  deleteTokenUserModel() {
    this.store.dispatch(deleteTokenUserModel());
  }

  getTokenUserModel(): TokenUserModel | undefined {
    const decodedToken = this.jwtHelperService.decodeToken(this.jwtHelperService.tokenGetter());
    //if (!decodedToken) return;

    const tokenUserModel: TokenUserModel = {
      id: +decodedToken[Object.keys(decodedToken).find(k => k.endsWith('nameidentifier')) || ''],
      name: decodedToken[Object.keys(decodedToken).find(k => k.endsWith('name')) || ''],
      email: decodedToken.email,
      claims:
        decodedToken[Object.keys(decodedToken).find(k => k.includes('role')) || ''].split(',') || []
    };
    return tokenUserModel;
  }
}
