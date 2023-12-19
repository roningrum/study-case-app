import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailComponentComponent } from './detail-component/detail-component.component';

const routes: Routes = [
  {
    path: "",
    component: AppComponent
  },
  {
    path:"detail",
    component: DetailComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// Ini untuk routing login -> home -> login 

// import { LoginComponent } from './login/login.component';
// import { HomeComponent } from './home/home.component';
// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [
//   { path: 'login', component: LoginComponent },
//   { path: 'home', component: HomeComponent },
//   { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to login if no path specified
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
