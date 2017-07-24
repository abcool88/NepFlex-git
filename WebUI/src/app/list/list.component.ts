import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  navContainer: any;
  constructor() { }

  ngOnInit() {
    this.navContainer = [
      { containerName: 'select price', expand: 0 },
      { containerName: 'select gender', expand: 1 },
      { containerName: 'select type', expand: 1 },
    ];
  }
}
