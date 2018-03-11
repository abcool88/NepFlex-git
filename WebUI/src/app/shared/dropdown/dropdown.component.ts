import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input() dropdownOptions: [{ label: string }];
  @Input() dropdownLabel: string;
  @Input() showDropdownLabel: boolean = true;
  @Input() dropdownLabelRoute: string;
  constructor(private route: Router) {}

  ngOnInit() {
  }
  routeDropdownTo(val: string) {
    this.route.navigate([val]);
  }
}
