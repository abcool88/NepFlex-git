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
import { CloudSpinnerComponent } from './spinner/cloud-spinner/cloud-spinner.component';
import { ModalComponent } from './modal/modal.component';
import { DetailService } from 'app/shared/services/detail.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CamelCase } from 'app/shared/pipes/camelcase.pipe';
import { AnimatedButtonComponent } from './animated-button/animated-button.component';
import { ButtonProperties } from 'app/shared/ResourceModels/ButtonProperties';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    ReactiveFormsModule,
    NgbModule
  ],
  declarations: [
    SpinnerComponent,
    DefaultValuePipe,
    OrderByPipe,
    CamelCase,
    OverlayComponent,
    CarouselComponent,
    DropdownComponent,
    CloudSpinnerComponent,
    ModalComponent,
    AnimatedButtonComponent
  ],
  providers: [
    ReportService,
    SearchService,,
    DetailService,
    FilteringSearch,
    ButtonProperties,
    OverlayComponent,
    CarouselComponent,
    HomeService
  ],
  exports: [
    SpinnerComponent,
    CloudSpinnerComponent,
    DefaultValuePipe,
    OrderByPipe,
    CamelCase,
    OverlayComponent,
    CarouselComponent,
    DropdownComponent,
    ModalComponent,
    AnimatedButtonComponent
  ]
})
export class SharedModule {}
