import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material/button";
import { CreateaccountComponent } from './login/createaccount.component';
import { ErrorComponent } from './error/error.component';
import {ReactiveFormsModule} from "@angular/forms";
import { TextConfirmDialogComponent } from './error/text-confirm-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CreateaccountComponent,
    ErrorComponent,
    TextConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    FlexLayoutModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
