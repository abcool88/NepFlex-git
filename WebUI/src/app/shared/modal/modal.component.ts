import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TermsOfUseComponent } from '../../desktop/pages/terms-of-use/terms-of-use.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .modal-content {
      padding: 3em;
    }
  `]
})
export class ModalComponent implements OnInit {
  @Input() name;
  modalform: FormGroup;
  modaltitle: string;
  modalbody: any = [];
  modalfooter: any = [];
  closeResult: string;
  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal
  ) {
    this.createForm();
  }

  createForm() {
    this.modalform = this.fb.group({
      modaltitle: '',
      modalbody: ''
      //modalfooter: ''
    });
  }
  ngOnInit(): void {}

  // open(content) {
  //   this.modalService.open(content, { windowClass: 'dark-modal' });
  // }
}
