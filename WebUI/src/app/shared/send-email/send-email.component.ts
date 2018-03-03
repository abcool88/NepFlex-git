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

  getErrorMessage() {
    this.showFCError = true;
    this.senderEmailFCError =
      this.senderEmailFC.invalid && this.senderEmailFC.hasError('required')
        ? 'You must enter a value'
        : this.senderEmailFC.invalid && this.senderEmailFC.hasError('email')
          ? 'Not a valid email'
          : '';

    this.sentToEmailFCError =
      this.sentToEmailFC.invalid && this.sentToEmailFC.hasError('required')
        ? 'You must enter a value'
        : this.sentToEmailFC.invalid && this.sentToEmailFC.hasError('email')
          ? 'Not a valid email'
          : '';

    this.subjectEmailFCError =
      this.subjectEmailFC.invalid && this.subjectEmailFC.hasError('required')
        ? 'You must enter a value'
        : '';

    this.emailTextFCError =
      this.emailTextFC.invalid && this.emailTextFC.hasError('required')
        ? 'You must enter a value'
        : '';
  }
}
