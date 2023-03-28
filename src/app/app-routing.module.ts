import {inject, NgModule} from '@angular/core';
import { ToolbarComponent } from "./application/toolbar.component";
import {
  ActivatedRouteSnapshot, CanActivateChildFn,
  CanActivateFn,
  Router,
  RouterModule,
  RouterStateSnapshot,
  Routes
} from "@angular/router";
import { LoginComponent } from "./login/login.component";
import {CreateaccountComponent} from "./login/createaccount.component";
import {ErrorComponent} from "./error/error.component";
import {AuthenticationService} from "../services/authentication.service";
import {HomepageComponent} from "./application/homepage.component";
import {DashboardComponent} from "./application/Pages/dashboard.component";
import {InventoryComponent} from "./application/Pages/Inventory.component";
import {OrdersComponent} from "./application/Pages/orders.component";
import {CustomersComponent} from "./application/Pages/customers.component";

export const canActivate: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const authService = inject(AuthenticationService);
  const router = inject(Router);
  if (authService.checkLogin()) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};

// export const canActivateChild: CanActivateChildFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => canActivate(route, state);

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: HomepageComponent, canActivate: [canActivate],
    children: [
      { path: 'dashboard', component: DashboardComponent, canActivate: [canActivate] },
      { path: 'inventory', component: InventoryComponent, canActivate: [canActivate] },
      { path: 'orders', component: OrdersComponent, canActivate: [canActivate] },
      { path: 'customers', component: CustomersComponent, canActivate: [canActivate] },
    ]},
  { path: 'create', component: CreateaccountComponent },
  { path: '**', component: ErrorComponent, data: {errorCode: 405, errorMessage: 'Page Not Found'}}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

