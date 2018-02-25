import { Component, OnInit, Input } from '@angular/core';
import { SearchResponse } from 'app/shared/ResourceModels/SearchResponse';

@Component({
  selector: 'app-item-container',
  templateUrl: './item-container.component.html',
  styleUrls: ['./item-container.component.scss']
})
export class ItemContainerComponent implements OnInit {
  @Input() itemResults: SearchResponse[] = new Array();
  constructor() {}

  ngOnInit() {}
}
