import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';

// Routes
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { CarouselComponent } from './carousel/carousel.component';
import { LimitedOfferComponent } from './banner/limited-offer/limited-offer.component';
import { NewArrivalComponent } from './banner/new-arrival/new-arrival.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { BillingShippingComponent } from './billing-shipping/billing-shipping.component';

import { ModalComponent } from './shared/modal/modal.component';
import { MenuNavComponent } from './header/menu-nav/menu-nav.component';
@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    HeaderComponent,
    BannerComponent,
    CarouselComponent,
    LimitedOfferComponent,
    NewArrivalComponent,
    ShoppingCartComponent,
    BillingShippingComponent,
    ModalComponent,
    MenuNavComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
