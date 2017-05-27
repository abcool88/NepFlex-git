import { Component, OnInit } from '@angular/core';
import { CarouselComponent } from  '../carousel/carousel.component';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  checkIfBanner: boolean = true;
  constructor() { }

  ngOnInit() {
  }


}
