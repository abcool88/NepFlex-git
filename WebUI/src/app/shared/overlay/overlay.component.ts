import { Component, OnInit } from '@angular/core';
import { OverlayService } from '../services/overlay.service';
@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit {
  overlayIsOn: boolean;
  constructor(private overlayService: OverlayService) { }

  ngOnInit() {
    this.overlayIsOn = false;
    this.overlayService.isOverlayOn$
      //.subscribe((overlayIsOn: boolean) => {
        //this.overlayIsOn = overlayIsOn;
      //});
  }
  dismissOverlay() {
    this.overlayService.turnOffOverlay();
  }
}
