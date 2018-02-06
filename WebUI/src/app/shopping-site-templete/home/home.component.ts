import { Component, OnInit } from '@angular/core';


//load component
import { HeaderComponent } from '../header/header.component';
import { BannerComponent } from '../banner/banner.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { LoaderService } from '../../../app/shared/services/loader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  limitedOffer: any;

  constructor(private loaderService: LoaderService) {
    this.limitedOffer = [
      { id: '1', offerTitle: 'Limited Offer', dateEnds: '05/27/2017' }
    ];
  }

  ngOnInit() {
    // this.loaderService.display(false);
  }

}
