import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-arrival',
  templateUrl: './new-arrival.component.html',
  styleUrls: ['./new-arrival.component.scss']
})
export class NewArrivalComponent implements OnInit {
  images: any;
  constructor() {
    this.images = [
      { id: '1', title: 'New Arrivals', url: '../dist/assets/images/NewArrivals.png'},
      { id: '2', title: 'Custom Design', url: '../dist/assets/images/customNepalTshirt.jpg' }
    ]
  }
  ngOnInit() {
  }

}
