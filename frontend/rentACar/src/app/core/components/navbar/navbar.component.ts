import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';
import { TokenUserModel } from './../../models/tokenUserModel';

// import { UserDetail } from 'src/app/models/userDetail';
// import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  tokenUserModel$: Observable<TokenUserModel | undefined> = this.authService.tokenUserModel$;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  logout() {
    this.authService.logout();
  }
  
}
