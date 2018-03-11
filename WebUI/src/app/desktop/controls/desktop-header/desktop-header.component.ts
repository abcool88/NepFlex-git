import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HeadersNavigation } from 'app/shared/ResourceModels/ButtonProperties';

@Component({
  selector: 'app-desktop-header',
  templateUrl: './desktop-header.component.html',
  styleUrls: ['./desktop-header.component.scss']
})
export class DesktopHeaderComponent implements OnInit {
  @Input() isThisComingFromHomePage: boolean = false;
  title: string = 'NepaliCraig';
  headersNavigation: HeadersNavigation[] = new Array();

  constructor(private router: Router) {
    this.headersNavigation = [
      {
        headerId: 1,
        header: 'About Us',
        headerRoute: 'aboutus',
        canRoute: true,
        hasDropDown: false,
        dropDownList: [{ id: 1, label: '', url: '' }]
      },
      {
        headerId: 2,
        header: 'Report Item',
        headerRoute: 'report',
        canRoute: true,
        hasDropDown: false,
        dropDownList: [{ id: 2, label: '', url: '' }]
      },
      {
        headerId: 3,
        header: 'NC Latest',
        headerRoute: 'home',
        canRoute: false,
        hasDropDown: true,
        dropDownList:([
          { id: 3, label: 'FAQ', url: 'faq' },
          { id: 4, label: 'Latest Release', url: '' }
        ])
      },
      {
        headerId: 4,
        header: 'My Account',
        headerRoute: 'account',
        canRoute: true,
        hasDropDown: true,
        dropDownList: [
          { id: 5, label: 'Post Items', url: '' },
          { id: 6, label: 'LogIn', url: '' }
        ]
      },
      {
        headerId: 5,
        header: '',
        headerRoute: 'Notification',
        canRoute: true,
        hasDropDown: true,
        dropDownList: [{ id: 7, label: 'you have 0 notifications', url: '' }]
      }
    ];
  }

  ngOnInit(): void {}
  HeaderRoute(routeTo: string, routingEnabled: boolean): void {
    if (routingEnabled) {
      this.router.navigate([routeTo]);
    }
  }
}
