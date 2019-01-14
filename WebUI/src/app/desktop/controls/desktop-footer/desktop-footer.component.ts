import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desktop-footer',
  templateUrl: './desktop-footer.component.html',
  styleUrls: ['./desktop-footer.component.scss']
})
export class DesktopFooterComponent implements OnInit {
  title: string = 'UpdatedCloud';
  constructor() { }

  ngOnInit() {
  }

}
