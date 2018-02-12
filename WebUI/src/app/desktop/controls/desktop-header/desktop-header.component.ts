import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-desktop-header',
  templateUrl: './desktop-header.component.html',
  styleUrls: ['./desktop-header.component.scss']
})
export class DesktopHeaderComponent implements OnInit {
  @Input() isThisComingFromHomePage: boolean = false;
  @Input() inputText: string;
  title: string = 'NepaliCraig';
  headersNavigation: [
    {
      headerId: number;
      header: string;
      headerRoute: string;
      canRoute: boolean;
      HasDropDown: boolean;
      DropDownList: [{ id: number; label: string; url: string }];
    }
  ];

  constructor(private router: Router) {
    this.headersNavigation = [
      {
        headerId: 1,
        header: 'About Us',
        headerRoute: 'aboutus',
        canRoute: true,
        HasDropDown: false,
        DropDownList: [{ id: 1, label: '', url: '' }]
      },
      {
        headerId: 2,
        header: 'Report Item',
        headerRoute: 'report',
        canRoute: true,
        HasDropDown: false,
        DropDownList: [{ id: 2, label: '', url: '' }]
      },
      {
        headerId: 3,
        header: 'NC Latest',
        headerRoute: 'home',
        canRoute: false,
        HasDropDown: true,
        DropDownList: [
          { id: 3, label: 'FAQ', url: 'faq' },
          { id: 4, label: 'Latest Release', url: '' }
        ]
      },
      {
        headerId: 4,
        header: 'My Account',
        headerRoute: 'account',
        canRoute: true,
        HasDropDown: true,
        DropDownList: [
          { id: 5, label: 'Post Items', url: '' },
          { id: 6, label: 'LogIn', url: '' }
        ]
      },
      {
        headerId: 5,
        header: '',
        headerRoute: 'Notification',
        canRoute: true,
        HasDropDown: true,
        DropDownList: [{ id: 7, label: 'you have 0 notifications', url: '' }]
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
