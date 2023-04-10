import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { ToolbarComponent } from './application/toolbar.component';
import { LoginComponent } from './login/login.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { CreateaccountComponent } from './login/createaccount.component';
import { ErrorComponent } from './error/error.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextConfirmDialogComponent } from './error/text-confirm-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HomepageComponent } from './application/homepage.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DashboardComponent } from './application/Pages/dashboard.component';
import { OrdersComponent } from './application/Pages/orders.component';
import { CustomersComponent } from './application/Pages/customers.component';
import { InventoryComponent } from './application/Pages/Inventory.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AddNewInventoryItemComponent } from './application/Dialogs/add-new-inventory-item.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatStepperModule} from "@angular/material/stepper";

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    LoginComponent,
    CreateaccountComponent,
    ErrorComponent,
    TextConfirmDialogComponent,
    HomepageComponent,
    DashboardComponent,
    InventoryComponent,
    OrdersComponent,
    CustomersComponent,
    AddNewInventoryItemComponent,
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
    MatDialogModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule,
    FormsModule,
    MatProgressBarModule,
    MatStepperModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
