import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  modalform: FormGroup;
  modaltitle: string;
  modalbody: any = [];
  modalfooter: any = [];

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.modalform = this.fb.group({
      modaltitle: '',
      modalbody: '',
      //modalfooter: ''
    });
  }

  ngOnInit() {
  }
}
