import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonProperties } from 'app/shared/ResourceModels/ButtonProperties';

@Component({
  selector: 'app-home-search-overlay',
  templateUrl: './home-search-overlay.component.html',
  styleUrls: ['./home-search-overlay.component.scss']
})
export class HomeSearchOverlayComponent implements OnInit {
  homeButtonCollections: ButtonProperties[]=new Array();
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
        DropDownList: [{ id: 1, label: '', url: '' }]
      },
      {
        buttonId: 2,
        buttonLabel: 'Mixed Items',
        buttonRoute: `/search/m`,
        canRoute: true,
        HasDropDown: false,
        DropDownList: [{ id: 1, label: '', url: '' }]
      },
      {
        buttonId: 3,
        buttonLabel: 'Switch To Classic NC',
        buttonRoute: `/search/m`,
        canRoute: true,
        HasDropDown: false,
        DropDownList: [{ id: 1, label: '', url: '' }]
      }
    ];
  }
  buttonRedirect(routeTo: string, routingEnabled: boolean): void {
    if (routingEnabled) {
      this.router.navigate([routeTo]);
    }
  }
}
