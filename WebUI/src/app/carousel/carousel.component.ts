import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { Http } from '@angular/http';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  images:any;

  constructor() {
    this.images = [
      {id:'0', title: 'We are covered', url: './dist/assets/images/cartbag.jpg',setactive:'active'},
      {id:'1', title: 'Generation Gap', url: './dist/assets/images/400dpiLogo.jpg'},
      {id:'2', title: 'Potter Me', url: './dist/assets/images/SmallLogoBW.png'},
      {id:'3', title: 'Pre-School Kids', url: './dist/assets/images/cartbag.jpg' },
      {id:'4', title: 'Young Peter Cech', url: './dist/assets/images/cartbag.jpg' }
    ];
  }

  ngOnInit() {
  }

}

export class Image {
  title: string;
  url: string;
}
