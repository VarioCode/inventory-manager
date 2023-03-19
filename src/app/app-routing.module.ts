import { NgModule } from '@angular/core';
import { HomeComponent } from "./home/home.component";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import {CreateaccountComponent} from "./login/createaccount.component";
import {ErrorComponent} from "./error/error.component";


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'create-account', component: CreateaccountComponent },
  { path: '**', component: ErrorComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
