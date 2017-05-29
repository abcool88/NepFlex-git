import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-limited-offer',
  templateUrl: './limited-offer.component.html',
  styleUrls: ['./limited-offer.component.scss']
})
export class LimitedOfferComponent implements OnInit {
  thumbnil: any;
  constructor() {
    this.thumbnil = [
      { id: '1', title: 'Casual', url: './dist/assets/images/Mens&LadiesFashion.png', price: 'SALE' },
      { id: '2', title: 'Kiddo', url: './dist/assets/images/ShoppingBanner.jpg', price: 'SALE' },
      { id: '3', title: 'Sunglass', url: './dist/assets/images/SunglassesCollection.png', price: 'SALE' },
      { id: '4', title: 'Office', url: './dist/assets/images/Mens&LadiesFashion.png', price: 'SALE' },
      { id: '5', title: 'Watchery', url: './dist/assets/images/watchesFashion.png', price: 'SALE' }
    ];
  }

  ngOnInit() {
  }

}
export class Image {
  title: string;
  url: string;
}
