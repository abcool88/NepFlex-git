import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-nav',
  templateUrl: './menu-nav.component.html',
  styleUrls: ['./menu-nav.component.scss']
})
export class MenuNavComponent implements OnInit {
  navList: any;
  expandNoItem: boolean;
  expandUserStatus: boolean;
  constructor() {
    this.expandNoItem = false;
    this.expandUserStatus = false;
    this.navList = [
      { id: '1', name: 'WOMEN' },
      { id: '2', name: 'MEN' },
      { id: '3', name: 'BABY & KIDS' },
      { id: '4', name: 'BOOKS & MORE' },
      { id: '5', name: 'LATEST ARRIVAL' },
      { id: '6', name: 'ELECTRONICS' }
    ];
  }

  ngOnInit() {
  }
  UserStatus(event) {
    this.expandUserStatus = !this.expandUserStatus;
    this.expandNoItem = false;
  }
}
