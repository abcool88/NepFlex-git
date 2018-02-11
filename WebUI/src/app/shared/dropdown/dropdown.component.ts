import { Component, OnInit, Input } from '@angular/core';

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
  constructor() {}

  ngOnInit() {
    console.log(this.dropdownOptions);
  }
}
