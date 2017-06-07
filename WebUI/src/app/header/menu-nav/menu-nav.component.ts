import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-nav',
  templateUrl: './menu-nav.component.html',
  styleUrls: ['./menu-nav.component.scss']
})
export class MenuNavComponent implements OnInit {
  navList: any;
  womenMenuPopContainer: any;
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

    this.womenMenuPopContainer = [
      { id: '1', label: 'activewear', menulink: 'women', title: 'all', url: '/shoppingbag' },
      { id: '2', label: 'blazers', menulink: 'women', title: '', url: '/billingandshipping' },
      { id: '3', label: 'coats', menulink: 'women', title: '', url: '/shoppingbag' },
      { id: '4', label: 'Dresses', menulink: 'women', title: '', url: '' },
      { id: '5', label: 'Jackets', menulink: 'women', title: '', url: '' },
      { id: '6', label: 'Jeans', menulink: 'women', title: '', url: '' },
      { id: '7', label: 'Jumpsuits &Rompers', menulink: 'women', title: '', url: '' },
      { id: '8', label: 'Leggings', menulink: 'women', title: '', url: '' },
      { id: '9', label: 'maternity', menulink: 'women', title: '', url: '' },
      { id: '10', label: 'nighty', menulink: 'women', title: '', url: '' },
      { id: '11', label: 'pajamas', menulink: 'women', title: '', url: '' },
      { id: '12', label: 'pants', menulink: 'women', title: '', url: '' },
      { id: '13', label: 'shorts', menulink: 'women', title: '', url: '' },
      { id: '14', label: 'skirts', menulink: 'women', title: '', url: '' },
      { id: '15', label: 'suits', menulink: 'women', title: '', url: '' },
      { id: '16', label: 'sweaters', menulink: 'women', title: '', url: '' },
      { id: '17', label: 'swimwear', menulink: 'women', title: '', url: '' },
      { id: '18', label: 'socks', menulink: 'women', title: '', url: '' },
      { id: '19', label: 'tops', menulink: 'women', title: '', url: '' }
    ]
  }

  ngOnInit() {
  }
  UserStatus(event) {
    this.expandUserStatus = !this.expandUserStatus;
    this.expandNoItem = false;
  }
}
