import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit {
  @Input() showOverlay: boolean = false;
  @Input() overlayMessage: String;
  closeModalBox: boolean = false;

  constructor() {
    console.log('showOverlay const', this.showOverlay);
  }

  ngOnInit(): void {

  }
  closeButtonClick(): void {
    this.showOverlay = !this.showOverlay;
    this.closeModalBox = this.showOverlay ;
    console.log('showOverlay', this.showOverlay);
  }
  sendEmail(): void {
    window.open('mailto:nepalicraig@gmail.com?subject= I want ' + this.overlayMessage + '&body= Name:.......... ,%0D%0A PhoneNumber:............ ,%0D%0A Price:.......... ');
  }
}
