import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MenuContainer } from '../../shared/interfaces/header';
import { HomeService } from '../../shared/services/home.service';
import { FilterBy } from '../../shared/pipes/filter-by.pipe';
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

  menuTopItem: any;
  errorMessage: string;
  MenuContainer: Observable<MenuContainer[]>;
  field: string;
  sortBy: string;
  constructor(private homeService: HomeService) {
    this.expandNoItem = false;
    this.expandUserStatus = false;
  }

  ngOnInit() {
    this.getMenu();
    this.field = 'MenuPopContainer';
    this.sortBy = '1';

    this.getMenuTopItems();
  }
  getMenu() {
    this.homeService.getMenuNav()
      .subscribe(navList => {
        this.navList = navList;
        this.navList.filter(element => {
          const resultx = element.menuId;
        });
      });

  }
  getMenuTopItems() {
    this.homeService.getMenuContainer()
      .subscribe(result => {
        this.womenMenuPopContainer = result;
      });
    return this.womenMenuPopContainer;
  }
  UserStatus(event) {
    this.expandUserStatus = !this.expandUserStatus;
    this.expandNoItem = false;
  }
}
