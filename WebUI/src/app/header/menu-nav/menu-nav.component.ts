import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MenuTop } from '../../shared/interfaces/header';
import { HomeService } from '../../shared/services/home.service';
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

  menuTopItem: string[];
  errorMessage: string;
  MenuTop: Observable<MenuTop[]>;
  constructor(private homeService: HomeService) {
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
    this.getMenuTopItems();
  }
  getMenuTopItems() {
    this.homeService.getMenuTopItems()
      .subscribe(result => {
        this.womenMenuPopContainer = result;
        console.log(result);
      });
    return this.womenMenuPopContainer;
    // this.womenMenuPopContainer = this.menuTopItem;
    //console.log(this.womenMenuPopContainer);
  }
  UserStatus(event) {
    this.expandUserStatus = !this.expandUserStatus;
    this.expandNoItem = false;
  }
}
