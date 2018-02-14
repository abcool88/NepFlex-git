import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.scss']
})
export class InfoBoxComponent implements OnInit {
  @Input() infoText: string[];
  constructor() {
   // console.log('this.infoText:', this.infoText);
  }

  ngOnInit() {}
}
