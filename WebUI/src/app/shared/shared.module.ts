import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OverlayComponent } from './overlay/overlay.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HomeService } from 'app/shared/services/home.service';
import { OrderByPipe } from 'app/shared/pipes/order-by.pipe';
import { FilteringSearch } from 'app/shared/ResourceModels/FilteringSearch';
import { SearchService } from 'app/shared/services/search.service';
import { ReportService } from 'app/shared/services/report.service';
import { DefaultValuePipe } from 'app/shared/pipes/default-value.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { SpinnerComponent } from 'app/shared/spinner/spinner.component';
import { CloudSpinnerComponent } from './spinner/cloud-spinner/cloud-spinner.component';
import { ModalComponent } from './modal/modal.component';
import { DetailService } from 'app/shared/services/detail.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CamelCase } from 'app/shared/pipes/camelcase.pipe';
import { AnimatedButtonComponent } from './animated-button/animated-button.component';
import { ButtonProperties } from 'app/shared/ResourceModels/ButtonProperties';
import { SendEmailComponent } from './send-email/send-email.component';
import { SendEmailService } from 'app/shared/services/send-email.service';
import { HTTPHeader } from './services/http-header';
import { HttpClientModule } from '@angular/common/http';
import { FilterByPipe } from './pipes/filter-by.pipe';
import { OrderByNestedPipe } from './pipes/order-by-nested.pipe';
import { UniqueValuePipe } from './pipes/unique-value.pipe';
import { SearchStringQuery } from './ResourceModels/SearchStringQuerys';
import { MyAngularMaterialModule } from './angular-material/angularMaterial.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    NgbModule,
    MyAngularMaterialModule
  ],
  declarations: [
    SpinnerComponent,
    DefaultValuePipe,
    OrderByPipe,
    FilterByPipe,
    OrderByNestedPipe,
    UniqueValuePipe,
    CamelCase,
    OverlayComponent,
    CarouselComponent,
    CloudSpinnerComponent,
    ModalComponent,
    AnimatedButtonComponent,
    SendEmailComponent
  ],
  providers: [
    ReportService,
    SearchService,
    DetailService,
    SendEmailService,
    FilteringSearch,
    ButtonProperties,
    SearchStringQuery,
    OverlayComponent,
    CarouselComponent,
    HomeService,
    HTTPHeader
  ],
  entryComponents: [SendEmailComponent],
  exports: [
    SpinnerComponent,
    CloudSpinnerComponent,
    DefaultValuePipe,
    OrderByPipe,
    FilterByPipe,
    OrderByNestedPipe,
    UniqueValuePipe,
    CamelCase,
    OverlayComponent,
    CarouselComponent,
    ModalComponent,
    AnimatedButtonComponent,
    SendEmailComponent
  ]
})
export class SharedModule {}
