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

  constructor() { }

  ngOnInit() {
  }

}
