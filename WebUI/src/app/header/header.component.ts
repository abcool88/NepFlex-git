import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navList: any;
  expandNoItem: boolean = false;
  expandUserStatus:boolean=false;

  constructor() {
    this.navList = [
      { id: '1', name: 'Men' },
      { id: '2', name: 'Women' },
      { id: '3', name: 'Latest Arrival' },
      { id: '4', name: 'Electronics' }
    ];

  }
  ngOnInit() {
    console.log(this.navList);
  }

  shoppingCartExpand(event) {
    this.expandNoItem = !this.expandNoItem;
      this.expandUserStatus=false;
  }
  UserStatus(event){
    this.expandUserStatus=!this.expandUserStatus;
    this.expandNoItem=false;
  }
}
