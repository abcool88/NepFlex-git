import { Component, OnInit, NgModule, ViewChild, Input } from '@angular/core';
import { LoaderService } from '../../shared/services/loader.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})

@NgModule({
  imports: [],
  exports: [],
})
export class SpinnerComponent implements OnInit {
   @ViewChild('md-progress-spinner') mdSpinner;
   @Input() value = 50;
   @Input() mode = 'indeterminate';
   @Input() strokeWidth;
   color = 'warn';
  // constructor() { }

  // ngOnInit() {
  // }

  showLoader: boolean;

  constructor(
    private loaderService: LoaderService) {
  }

  ngOnInit() {
    this.loaderService.status.subscribe((val: boolean) => {
      this.showLoader = val;
    });
  }
}
