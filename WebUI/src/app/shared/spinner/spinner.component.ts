import { Component, OnInit, NgModule, ViewChild, Input } from '@angular/core';
import { MdProgressSpinnerModule } from '@angular/material';
import { LoaderService } from '../../shared/services/loader.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})

@NgModule({
  imports: [MdProgressSpinnerModule],
  exports: [MdProgressSpinnerModule],
})
export class SpinnerComponent implements OnInit {
   @ViewChild('md-progress-spinner') mdSpinner: MdProgressSpinnerModule;
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
