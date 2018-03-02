import { Component, OnInit, Input } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  providers: [NgbCarouselConfig]
})
export class CarouselComponent implements OnInit {
  @Input() imageList: string[];
  @Input() showLabelBeforeImg: boolean = false;
  constructor(config: NgbCarouselConfig) {}
  ngOnInit() {
  }
}
