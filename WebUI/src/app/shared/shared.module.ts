import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { OverlayComponent } from './overlay/overlay.component';
import { CarouselComponent } from './carousel/carousel.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { HomeService } from 'app/shared/services/home.service';
import { OrderByPipe } from 'app/shared/pipes/order-by.pipe';
import { FilteringSearch } from 'app/shared/ResourceModels/FilteringSearch';
import { SearchService } from 'app/shared/services/search.service';

// import { HomeComponent } from 'app/shared/pages/home/home.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [
    OrderByPipe,
    OverlayComponent,
    CarouselComponent,
    DropdownComponent
  ],
  providers: [
    SearchService,
    FilteringSearch,
    OverlayComponent,
    CarouselComponent,
    HomeService,
    OrderByPipe
  ],
  exports: [OrderByPipe, OverlayComponent, CarouselComponent, DropdownComponent]
})
export class SharedModule {}
