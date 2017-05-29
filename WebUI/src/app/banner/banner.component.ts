import { Component, OnInit } from '@angular/core';
import { CarouselComponent } from  '../carousel/carousel.component';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  checkIfBanner: boolean = true;
  images:any;
  constructor() {
     this.images = [
      // {id:'0', title: 'We are covered', url: './dist/assets/images/cartbag.jpg',setactive:'active'},
      // {id:'1', title: 'Generation Gap', url: './dist/assets/images/400dpiLogo.jpg'},
      // {id:'2', title: 'Potter Me', url: './dist/assets/images/SmallLogoBW.png'},
      // {id:'3', title: 'Pre-School Kids', url: './dist/assets/images/cartbag.jpg' },
      {id:'4', title: 'Young Peter Cech', url: './dist/assets/images/sunglasses_1.png',setactive:'active' }
    ];
   }

  ngOnInit() {
  }


}
export class Image {
  title: string;
  url: string;
}
