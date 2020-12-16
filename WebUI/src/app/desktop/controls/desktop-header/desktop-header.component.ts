import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from 'app/shared/login/login.component';
import { HeadersNavigation } from 'app/shared/ResourceModels/ButtonProperties';

@Component({
  selector: 'app-desktop-header',
  templateUrl: './desktop-header.component.html',
  styleUrls: ['./desktop-header.component.scss']
})
export class DesktopHeaderComponent implements OnInit {
  @Input()
  isThisComingFromHomePage: boolean = false;
  title: string = 'NepaliCraig';
  headersNavigation: HeadersNavigation[] = new Array();
  showPopUpModal = false;

  constructor(private router: Router, private modalService: NgbModal) {
    this.headersNavigation = [
      {
        headerId: 1,
        header: 'About Us',
        headerRoute: 'aboutus',
        canRoute: true,
        hasDropDown: false,
        dropDownList: [{ id: 1, displayName: '' }]
      },
      {
        headerId: 2,
        header: 'Report Item',
        headerRoute: 'report',
        canRoute: true,
        hasDropDown: false,
        dropDownList: [{ id: 2, displayName: '' }]
      },
      {
        headerId: 3,
        header: 'NC Latest',
        headerRoute: 'home',
        canRoute: false,
        hasDropDown: true,
        dropDownList: [
          { id: 3, displayName: 'FAQ', route: 'faq' },
          { id: 4, displayName: 'Latest Release' }
        ]
      },
      {
        headerId: 4,
        header: 'My Account',
        headerRoute: 'account',
        canRoute: true,
        hasDropDown: true,
        dropDownList: [
          { id: 5, displayName: 'Post Items' },
          {
            id: 6,
            displayName: 'LogIn',
            children: [{ id: 5.1, displayName: 'Log Me In' }]
          }
        ]
      },
      {
        headerId: 5,
        header: '',
        headerRoute: 'Notification',
        canRoute: true,
        hasDropDown: true,
        dropDownList: [
          {
            id: 7,
            displayName: 'you have 0 notifications'
          }
        ]
      }
    ];
  }

  ngOnInit(): void { }
  HeaderRoute(routeTo: string, routingEnabled: boolean): void {
    if (routingEnabled) {
      this.router.navigate([routeTo]);
    }
  }

  loginPopUp() {
    this.showPopUpModal = true;
    // console.log('showPopUpModal: ', this.showPopUpModal);
    this.modalService.open(LoginComponent, { windowClass: 'dark-modal' });
  }
}
