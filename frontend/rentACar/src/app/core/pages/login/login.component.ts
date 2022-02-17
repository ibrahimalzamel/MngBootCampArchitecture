import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserForLoginDto } from './../../models/userForLoginDto';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  passwordHidden: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    if (!this.loginForm.valid) return;

    let userForLoginDto: UserForLoginDto = { ...this.loginForm.value };

    this.authService.login(userForLoginDto).subscribe({
      next: response => {
        localStorage.setItem('token', response.token);
        this.authService.refleshTokenUserModel();
        // this.cookieService.set('tokenModel.token', response.token); todo
        // this.cookieService.set('tokenModel.expiration', response.expiration);
      },
      complete: () => {
        this.toastrService.info("You've been logged in successfully!");
        this.router.navigateByUrl('');
      }
    });
  }

  togglePasswordHidden() {
    this.passwordHidden = !this.passwordHidden;
  }

  isPasswordHidden(): string {
    return this.passwordHidden ? 'password' : 'text';
  }

  isPasswordHiddenIcon(): string {
    return this.passwordHidden ? 'pi-eye-slash' : 'pi-eye text-primary';
  }
}
