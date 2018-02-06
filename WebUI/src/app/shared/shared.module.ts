import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { OverlayComponent } from './overlay/overlay.component';
import { CarouselComponent } from './carousel/carousel.component';
import { DropdownComponent } from './dropdown/dropdown.component';

// import { HomeComponent } from 'app/shared/pages/home/home.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [
    // HomeComponent
    OverlayComponent,
    CarouselComponent,
    DropdownComponent
  ],
  providers: [OverlayComponent, CarouselComponent],
  exports: [
    OverlayComponent,
    CarouselComponent,
    DropdownComponent
    // HomeComponent
  ]
})
export class SharedModule {}
