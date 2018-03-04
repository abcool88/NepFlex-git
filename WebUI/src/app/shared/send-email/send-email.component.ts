import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';
import { ButtonProperties } from 'app/shared/ResourceModels/ButtonProperties';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.scss']
})
export class SendEmailComponent implements OnInit {
  sendEmailForm: FormGroup;
  detailButttons: ButtonProperties[] = new Array();
  showFCError: boolean = false;
  senderEmailFC: FormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  senderEmailFCError: string;
  subjectEmailFCError: string;
  sentToEmailFCError: string;
  emailTextFCError: string;
  subjectEmailFC: FormControl = new FormControl('', [Validators.required]);
  sentToEmailFC: FormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  emailTextFC: FormControl = new FormControl('', [Validators.required]);
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    this.allButtons();
  }
  allButtons() {
    this.detailButttons = [
      {
        buttonId: 1,
        buttonLabel: 'Send Email',
        hasPopUp: false,
        buttonRoute: '',
        canRoute: false,
        HasDropDown: false,
        DropDownList: [{ id: 1, label: '', url: '' }],
        popUpName: 'clickSendEmailButton'
      }
    ];
  }
  prepareToSendEmail(
    event: { target; value: string },
    formControlName: string
  ) {
    const val = event.target.value;
    this.sendEmailForm.get(formControlName).patchValue(val);
    this.getErrorMessage();
    // console.log(
    //   'senderEmailVal: ',
    //   val,
    //   'formControlName: ',
    //   formControlName,
    //   'senderEmailForm: ',

    //   this.sendEmailForm.get(formControlName).value
    // );
  }

  createForm() {
    this.sendEmailForm = this.fb.group({
      senderEmail: this.senderEmailFC,
      sentToEmail: this.sentToEmailFC,
      subjectEmail: this.subjectEmailFC,
      emailText: this.emailTextFC
    });
  }
  sendEmailNow() {
    if (this.sendEmailForm.valid) {
      console.log(
        'ONbuttonSaveClick===>',
        'senderEmailForm: ',
        this.sendEmailForm
      );
    }
  }

  getErrorMessage(): string {
    this.showFCError = true;
    if (this.sendEmailForm.invalid) {
      if (
        this.senderEmailFC.invalid &&
        this.senderEmailFC.hasError('required')
      ) {
        this.senderEmailFCError = 'You must enter a value';
        return;
      }
      if (this.senderEmailFC.invalid && this.senderEmailFC.hasError('email')) {
        this.senderEmailFCError = 'Not a valid email';
        return;
      } else {
        this.senderEmailFCError = '';
      }
      if (
        this.sentToEmailFC.invalid &&
        this.sentToEmailFC.hasError('required')
      ) {
        this.sentToEmailFCError = 'You must enter a value';
        return;
      }
      if (this.sentToEmailFC.invalid && this.sentToEmailFC.hasError('email')) {
        this.sentToEmailFCError = 'Not a valid email';
        return;
      } else {
        this.sentToEmailFCError = '';
      }
      if (
        this.subjectEmailFC.invalid &&
        this.subjectEmailFC.hasError('required')
      ) {
        this.subjectEmailFCError = 'You must enter a value';
        return;
      } else {
        this.subjectEmailFCError = '';
      }
      if (this.emailTextFC.invalid && this.emailTextFC.hasError('required')) {
        this.emailTextFCError = 'You must enter a value';
        return;
      } else {
        this.emailTextFCError = '';
      }
    } else {
      this.senderEmailFCError = '';
      this.sentToEmailFCError = '';
      this.subjectEmailFCError = '';
      this.emailTextFCError = '';
    }
  }
}
