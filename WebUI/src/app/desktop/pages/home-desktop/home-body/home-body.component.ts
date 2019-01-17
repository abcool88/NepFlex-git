import { Component, OnInit } from '@angular/core';
import { ContainerType } from 'app/shared/ResourceModels/enumerator';

@Component({
  selector: 'app-home-body',
  templateUrl: './home-body.component.html',
  styleUrls: ['./home-body.component.scss']
})
export class HomeBodyComponent implements OnInit {
  containerType_News = ContainerType.NewsItem;
  constructor() { }

  ngOnInit() {
  }

}
