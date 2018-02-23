import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cloud-spinner',
  templateUrl: './cloud-spinner.component.html',
  styleUrls: ['./cloud-spinner.component.scss']
})
export class CloudSpinnerComponent implements OnInit {
  @Input() showCloudSpinner: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
