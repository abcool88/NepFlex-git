import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

//all component
import { HomeComponent } from './home/home.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { BillingShippingComponent } from './billing-shipping/billing-shipping.component';
import { AccountComponent } from './account/account.component';
import { ListComponent } from 'app/list/list.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'shoppingbag', component: ShoppingCartComponent, pathMatch: 'full' },
  { path: 'billingandshipping', component: BillingShippingComponent, pathMatch: 'full' },
  { path: 'MyAccount', component: AccountComponent, pathMatch: 'full' },
  // { path: '**', redirectTo: 'pagenotfound', pathMatch: 'full' },
  // { path: '', redirectTo: 'home/home', pathMatch: 'full' },
  { path: 'list/:activeRouteId', component: ListComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

