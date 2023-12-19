// src/app/home/home.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  friendslist = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 },
    // Add more sample data as needed
  ];

  constructor(private router: Router) {}

  logout() {
    // Add any necessary logout logic here
    // For now, navigate back to the login page
    this.router.navigate(['/login']);
  }
}
