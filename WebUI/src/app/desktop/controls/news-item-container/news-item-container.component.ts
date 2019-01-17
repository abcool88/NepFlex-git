import { Component, OnInit, Input } from '@angular/core';
import { NewsResponse } from 'app/shared/ResourceModels/NewsResponse';

@Component({
  selector: 'app-news-item-container',
  templateUrl: './news-item-container.component.html',
  styleUrls: ['./news-item-container.component.scss']
})
export class NewsItemContainerComponent implements OnInit {
  @Input() isHomePage?: boolean;
  @Input() containerType: string;
  @Input() itemResults: NewsResponse[] = new Array();
  constructor() {}

  ngOnInit() {}
}
