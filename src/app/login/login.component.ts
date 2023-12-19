// src/app/login/login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private router: Router) {}

  login() {
    // Add your login logic here

    // For now, navigate to the home page upon successful login
    this.router.navigate(['/home']);
  }
}
