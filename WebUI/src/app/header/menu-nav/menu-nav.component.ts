import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-nav',
  templateUrl: './menu-nav.component.html',
  styleUrls: ['./menu-nav.component.scss']
})
export class MenuNavComponent implements OnInit {
  navList: any;
  expandNoItem: boolean = false;
  expandUserStatus: boolean = false;
  constructor() {
    this.navList = [
      { id: '1', name: 'Men' },
      { id: '2', name: 'Women' },
      { id: '3', name: 'Baby & Kids' },
      { id: '4', name: 'Books & More' },
      { id: '5', name: 'Latest Arrival' },
      { id: '6', name: 'Electronics' }
    ];
  }

  ngOnInit() {
  }
  UserStatus(event) {
    this.expandUserStatus = !this.expandUserStatus;
    this.expandNoItem = false;
  }
}
