import { Component, OnInit } from '@angular/core';

// load component
import { BannerComponent } from '../banner/banner.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navList: any;
  topNav: any;
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

    this.topNav = [
      { id: '1', name: 'Sell-On-Nepflex' },
      { id: '2', name: 'Create Gift card' },
      { id: '3', name: 'Redeem Gift' },
      { id: '4', name: 'Contact' },
      { id: '5', name: 'Deals & Promotions' },
      { id: '6', name: 'Customer Service' }
    ];

  }
  ngOnInit() {
    console.log(this.navList);
  }

  shoppingCartExpand(event) {
    this.expandNoItem = !this.expandNoItem;
    this.expandUserStatus = false;
  }
  noExpandCart(event) {
    this.expandNoItem = !this.expandNoItem;
    this.expandUserStatus = false;
  }
  UserStatus(event) {
    this.expandUserStatus = !this.expandUserStatus;
    this.expandNoItem = false;
  }
}
