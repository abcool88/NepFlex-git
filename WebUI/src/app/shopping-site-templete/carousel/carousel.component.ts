import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { Http } from '@angular/http';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  images: any;
  constructor() {
    this.images = [
      { id: '0', title: 'We are covered', url: './dist/assets/images/cartbag.jpg', price: '$20.99', setactive: 'active' },
      { id: '1', title: 'Generation Gap', url: './dist/assets/images/400dpiLogo.jpg', price: '$25.99', setactive: 'active' },
      { id: '2', title: 'Potter Me', url: './dist/assets/images/SmallLogoBW.png', price: '$40.99', setactive: 'active' },
      { id: '3', title: 'Pre-School Kids', url: './dist/assets/images/cartbag.jpg', price: '$50.99', setactive: 'active' },
      { id: '4', title: 'Young Peter Cech', url: './dist/assets/images/sunglasses_1.png', price: '$99.99' },
      { id: '5', title: 'Pre-School Kids', url: './dist/assets/images/cartbag.jpg', price: '$50.99' },
      { id: '6', title: 'Young Peter Cech', url: './dist/assets/images/sunglasses_1.png', price: '$99.99' },
      { id: '5', title: 'Pre-School Kids', url: './dist/assets/images/cartbag.jpg', price: '$50.99' }

    ];
  }

  ngOnInit() {
  }
}

export class Image {
  title: string;
  url: string;
}
