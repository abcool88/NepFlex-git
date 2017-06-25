import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MenuContainer } from '../../shared/interfaces/header';
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
  MenuContainer: Observable<MenuContainer[]>;
  constructor(private homeService: HomeService) {
    this.expandNoItem = false;
    this.expandUserStatus = false;
  }

  ngOnInit() {
    this.getMenu();
    //this.getMenuTopItems();
  }
  getMenu() {
    this.homeService.getMenuNav()
      .subscribe(navList => {
        this.navList = navList;
        console.log('navList' + this.navList.menuId);
      });
  }
  onclick(event, id: string) {
    console.log('MenuPopID : ' + id);
  }
  getMenuTopItems(event, id: number) {
    this.homeService.getMenuContainer(id)
      .subscribe(result => {
        this.womenMenuPopContainer = result;
        console.log('WOMEN' + this.womenMenuPopContainer);
      });
  }
  UserStatus(event) {
    this.expandUserStatus = !this.expandUserStatus;
    this.expandNoItem = false;
  }
}
