import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OverlayComponent } from './overlay/overlay.component';
import { CarouselComponent } from './carousel/carousel.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { HomeService } from 'app/shared/services/home.service';
import { OrderByPipe } from 'app/shared/pipes/order-by.pipe';
import { FilteringSearch } from 'app/shared/ResourceModels/FilteringSearch';
import { SearchService } from 'app/shared/services/search.service';
import { ReportService } from 'app/shared/services/report.service';
import { DefaultValuePipe } from 'app/shared/pipes/default-value.pipe';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { SpinnerComponent } from 'app/shared/spinner/spinner.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    SpinnerComponent,
    DefaultValuePipe,
    OrderByPipe,
    OverlayComponent,
    CarouselComponent,
    DropdownComponent
  ],
  providers: [
    ReportService,
    SearchService,
    FilteringSearch,
    OverlayComponent,
    CarouselComponent,
    HomeService
  ],
  exports: [
    SpinnerComponent,
    DefaultValuePipe,
    OrderByPipe,
    OverlayComponent,
    CarouselComponent,
    DropdownComponent
  ]
})
export class SharedModule {}
