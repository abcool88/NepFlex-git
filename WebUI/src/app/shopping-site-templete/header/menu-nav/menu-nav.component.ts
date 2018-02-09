import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MenuContainer } from '../../../shared/interfaces/header';
import { HomeService } from '../../../shared/services/home.service';
import { FilterByPipe } from '../../../shared/pipes/filter-by.pipe';
import { Router } from '@angular/router';
import { LoaderService } from 'app/shared/services/loader.service';
@Component({
  selector: 'app-menu-nav',
  templateUrl: './menu-nav.component.html',
  styleUrls: ['./menu-nav.component.scss']
})
export class MenuNavComponent implements OnInit {
  navList: any;
  clothingBrands: any;
  ClearenceList: any;
  womenMenuPopContainer: any;
  newArrivalList: any;
  fashionList: any;

  expandNoItem: boolean;
  expandUserStatus: boolean;

  passMenuName: string;
  passMenuId: any;

  menuTopItem: any;
  errorMessage: string;
  MenuContainer: Observable<MenuContainer[]>;
  field: string;
  sortBy: any;
  clothingField: string;
  sortClothingBrandBy: string;
  constructor(private homeService: HomeService, private route: Router, private loaderService: LoaderService) {
    this.expandNoItem = false;
    this.expandUserStatus = false;
  }

  ngOnInit() {
    this.loaderService.display(true);
    this.getMenu();
    this.field = 'menuName';
    this.clothingField = 'brandName';
    this.loaderService.display(false);
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
    this.loaderService.display(true);
    // this.homeService.getMenuContainer()
    //   .subscribe(result => {
    //     this.sortBy = value;
    //     this.womenMenuPopContainer = result.filter(item => item.menuID.toPrecision().indexOf(value) !== -1);
    //   });
    // this.homeService.getClothingBrand()
    //   .subscribe(resultClothingBrand => {
    //     this.sortClothingBrandBy = value;
    //     this.clothingBrands = resultClothingBrand.filter(itemx => itemx.menuId.toPrecision().indexOf(value) !== -1);
    //   });
    // this.homeService.getClearence()
    //   .subscribe(resultClearence => {
    //     this.ClearenceList = resultClearence.filter(itemx => itemx.menuId.toPrecision().indexOf(value) !== -1);
    //   });
    // this.homeService.getFashion()
    //   .subscribe(resultFashion => {
    //     this.fashionList = resultFashion.filter(itemx => itemx.menuId.toPrecision().indexOf(value) !== -1);
    //   });
    // this.homeService.getNewArrivals()
    //   .subscribe(resultNewArrival => {
    //     this.newArrivalList = resultNewArrival.filter(itemx => itemx.menuId.toPrecision().indexOf(value) !== -1);
    //   });
    this.loaderService.display(false);
  }



  UserStatus(event) {
    this.expandUserStatus = !this.expandUserStatus;
    this.expandNoItem = false;
  }
  ClickedPopMenuUrl(url: string) {
    debugger;
    this.route.navigateByUrl(url);
  }
}
