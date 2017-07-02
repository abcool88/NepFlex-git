import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MenuContainer } from '../../shared/interfaces/header';
import { HomeService } from '../../shared/services/home.service';
import { FilterByPipe } from '../../shared/pipes/filter-by.pipe';

@Component({
  selector: 'app-menu-nav',
  templateUrl: './menu-nav.component.html',
  styleUrls: ['./menu-nav.component.scss']
})
export class MenuNavComponent implements OnInit {
  navList: any;
  womenMenuPopContainer_x: any;
  womenMenuPopContainer: any;
  expandNoItem: boolean;
  expandUserStatus: boolean;

  passMenuName: string;
  passMenuId: any;

  menuTopItem: any;
  errorMessage: string;
  MenuContainer: Observable<MenuContainer[]>;
  field: string;
  sortBy: any;
  constructor(private homeService: HomeService) {
    this.expandNoItem = false;
    this.expandUserStatus = false;
  }

  ngOnInit() {
    this.getMenu();
    this.field = 'menuName';
  }

  getMenu() {
    this.homeService.getMenuNav()
      .subscribe(navList => {
        this.navList = navList;
        navList.forEach(x => {
          this.sortBy = x.menuId;
        });

      });
  }

  getMenuTopItems(value) {
     this.homeService.getMenuContainer()
      .subscribe(result => {
        this.sortBy = value;
        this.womenMenuPopContainer_x = result;
        this.womenMenuPopContainer = result.filter(item => item.menuName.indexOf(value) !== -1);
        console.log('RESULT HERE :> '  + this.womenMenuPopContainer);
      });
  }
  UserStatus(event) {
    this.expandUserStatus = !this.expandUserStatus;
    this.expandNoItem = false;
  }
}
