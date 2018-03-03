import { Component, OnInit, Input } from '@angular/core';
import { ButtonProperties } from 'app/shared/ResourceModels/ButtonProperties';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AboutUsComponent } from '../../desktop/pages/about-us/about-us.component';

@Component({
  selector: 'app-animated-button',
  templateUrl: './animated-button.component.html',
  styleUrls: ['./animated-button.component.scss']
})
export class AnimatedButtonComponent implements OnInit {
  @Input() buttonCollections: ButtonProperties[];
  showPopUpModal: boolean = false;
  constructor(private router: Router,private modalService: NgbModal) {}

  ngOnInit() {}
  functionalButton(id: number) {
    const buttonFunctions = this.buttonCollections.find(a => a.buttonId == id);

    if (
      buttonFunctions.hasPopUp === true &&
      buttonFunctions.popUpName === 'sendEmail'
    ) {
      this.showPopUpModal = true;
      console.log('showPopUpModal: ',  this.showPopUpModal);
      this.modalService.open(AboutUsComponent, { windowClass: 'dark-modal' });
    }

    if (buttonFunctions.canRoute === true) {
      console.log('buttonFunctions.buttonRoute: ', buttonFunctions.buttonRoute);
      this.router.navigate([buttonFunctions.buttonRoute]);
    }
  }
}
