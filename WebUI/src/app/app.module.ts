import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';

// pipes
import { DefaultValuePipe } from './shared/pipes/default-value.pipe';
import { FilterByPipe } from './shared/pipes/filter-by.pipe';
import { OrderByNestedPipe } from './shared/pipes/order-by-nested.pipe';
import { OrderByPipe } from './shared/pipes/order-by.pipe';
import { UniqueValuePipe } from './shared/pipes/unique-value.pipe';
import { CamelCase } from './shared/pipes/camelcase.pipe';
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

import { HomeService } from './shared/services/home.service';
import { AccountComponent } from './account/account.component';
import { OverlayComponent } from './shared/overlay/overlay.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import 'hammerjs';
import { MdProgressSpinner, MaterialModule } from '@angular/material';
import { LoaderService } from './shared/services/loader.service';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { IndexComponent } from './home/index/index.component';
import { ProductCarouselComponent } from './carousel/product-carousel/product-carousel.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    // components
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
    MenuNavComponent,

    // pipes
    DefaultValuePipe,
    FilterByPipe,
    OrderByNestedPipe,
    OrderByPipe,
    UniqueValuePipe,
    CamelCase,
    AccountComponent,
    OverlayComponent,
    SpinnerComponent,
    ListComponent,
    DetailComponent,
    IndexComponent,
    ProductCarouselComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule, MaterialModule
  ],
  providers: [HomeService, LoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
