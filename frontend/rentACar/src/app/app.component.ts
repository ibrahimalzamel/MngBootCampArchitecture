import { AuthService } from './core/services/auth/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rentacar';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.refreshAuth();
  }
}
