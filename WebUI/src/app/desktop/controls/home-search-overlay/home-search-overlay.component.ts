import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-search-overlay',
  templateUrl: './home-search-overlay.component.html',
  styleUrls: ['./home-search-overlay.component.scss']
})
export class HomeSearchOverlayComponent implements OnInit {
  homeButtonCollections: [
    {
      buttonId: number;
      buttonLabel: string;
      buttonRoute: string;
      canRoute: boolean;
      HasDropDown: boolean;
      DropDownList: [{ label: string }];
    }
  ];
  constructor(private router: Router) {
    this.ButtonCollections();
  }

  ngOnInit() {}
  ButtonCollections() {
    this.homeButtonCollections = [
      {
        buttonId: 1,
        buttonLabel: 'Search More',
        buttonRoute: `/search`,
        canRoute: true,
        HasDropDown: false,
        DropDownList: [{ label: '' }]
      },
      {
        buttonId: 2,
        buttonLabel: 'Mixed Items',
        buttonRoute: `/search/m`,
        canRoute: true,
        HasDropDown: false,
        DropDownList: [{ label: '' }]
      }
    ];
  }
  buttonRedirect(routeTo: string, routingEnabled: boolean): void {
    if (routingEnabled) {
      this.router.navigate([routeTo]);
    }
  }
}
