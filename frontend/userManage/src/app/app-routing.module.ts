import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './componets/user/register/register.component';
import { LoginComponent } from './componets/user/login/login.component';
import { HomeComponent } from './componets/user/home/home.component';

const routes: Routes = [

  {path:'',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
