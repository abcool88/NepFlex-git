import { Component, OnInit } from '@angular/core';


//load component
import { HeaderComponent } from '../header/header.component';
import {BannerComponent} from  '../banner/banner.component';
import { CarouselComponent } from  '../carousel/carousel.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 limitedOffer:any;

  constructor() { 
    this.limitedOffer=[
      { id:'1',offerTitle:'Limited Offer',dateEnds:'05/27/2017'  }
      ];
  }

  ngOnInit() {
  }

}
