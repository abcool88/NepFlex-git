import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { RouteTo } from '../interfaces/local-router';
import { ButtonProperties } from '../ResourceModels/ButtonProperties';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  detailButttons: ButtonProperties[] = new Array();
  showFCError: boolean = false;
  matcher = new MyErrorStateMatcher();
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  companyFC: FormControl = new FormControl('', [Validators.required]);
  firstnameFC: FormControl = new FormControl('', [Validators.required]);
  lastnameFC: FormControl = new FormControl('', [Validators.required]);
  addressFC: FormControl = new FormControl('', [Validators.required]);
  address2FC: FormControl = new FormControl('', [Validators.required]);
  cityFC: FormControl = new FormControl('', [Validators.required]);
  stateFC: FormControl = new FormControl('', [Validators.required]);
  zipcodeFC: FormControl = new FormControl('', [Validators.required]);
  emailFC: FormControl = new FormControl('', [Validators.required]);
  phonenumberFC: FormControl = new FormControl('', [Validators.required]);
  usernameFC: FormControl = new FormControl('', [Validators.required]);
  passwordFC: FormControl = new FormControl('', [Validators.required]);

  companyFCError: string;
  firstnameFCError: string;
  lastnameFCError: string;
  addressFCError: string;
  address2FCError: string;
  cityFCError: string;
  stateFCError: string;
  zipcodeFCError: string;
  emailFCError: string;
  phonenumberFCError: string;
  usernameFCError: string;
  passwordFCError: string;

  form = this.fb.group({
    company: this.companyFC,
    firstname: this.firstnameFC,
    lastname: this.lastnameFC,
    address: this.addressFC,
    address2: this.address2FC,
    city: this.cityFC,
    state: this.stateFC,
    zipcode: this.zipcodeFC,
    email: this.emailFC,
    phonenumber: this.phonenumberFC,
    username: this.usernameFC,
    password: this.passwordFC
  })

  constructor(private fb: FormBuilder, private routeLink: RouteTo) { }

  ngOnInit(): void {
    this.allButtons();
  }
  allButtons() {
    this.detailButttons = [
      {
        buttonId: 1,
        buttonLabel: 'Register Now',
        hasPopUp: false,
        buttonRoute: '',
        canRoute: false,
        HasDropDown: false,
        DropDownList: [{ id: 1, label: '', url: '' }],
        popUpName: 'clickSendEmailButton'
      }
    ];
  }
  validateForrm() {
    this.showFCError = true;
    if (this.form.invalid) {
      if (
        this.companyFC.invalid &&
        this.companyFC.hasError('required')
      ) {
        this.companyFCError = 'You must enter a value';
        return;
      }
      if (this.emailFC.invalid && this.emailFC.hasError('email')) {
        this.emailFCError = 'Not a valid email';
        return;
      } else {
        this.emailFCError = '';
      }
      if (
        this.firstnameFC.invalid &&
        this.firstnameFC.hasError('required')
      ) {
        this.firstnameFCError = 'You must enter a value';
        return;
      }
      if (this.lastnameFC.invalid && this.lastnameFC.hasError('required')) {
        this.lastnameFCError = 'Not a valid email';
        return;
      } else {
        this.lastnameFCError = '';
      }
      if (
        this.usernameFC.invalid &&
        this.usernameFC.hasError('required')
      ) {
        this.usernameFCError = 'You must enter a value';
        return;
      } else {
        this.usernameFCError = '';
      }
      if (this.passwordFC.invalid && this.passwordFC.hasError('required')) {
        this.passwordFCError = 'You must enter a value';
        return;
      } else {
        this.passwordFCError = '';
      }
    } else {
      this.showFCError = false;
      this.passwordFCError = '';
      this.usernameFCError = '';
      this.emailFCError = '';
      this.firstnameFCError = '';
      this.lastnameFCError = '';
      this.companyFCError = '';
      this.addressFCError = '';
      this.address2FCError = '';
      this.phonenumberFCError = '';

    }
  }

  RouteTo(routeTo: string, routingEnabled = true): void {
    console.log('now routing: ', routeTo);
    this.routeLink.RouteTo(routeTo, routingEnabled);
  }

  registerNow() {
    this.validateForrm();
    if (this.form.valid) {
      console.log('FORM IS VALID');
      // const val = Object.assign(
      //   new SendEmailProperties(),
      //   this.sendEmailForm.value
      // );
      // this.sendEmailService.sendEmail(val).subscribe(a => {
      //   alert('email sent');
      // });
      // console.log(
      //   'ONbuttonSaveClick===>',
      //   'senderEmailForm: ',
      //   this.sendEmailForm
      // );
    }
  }

  prepareToSendEmail(
    event: { target; value: string },
    formControlName: string
  ) {
    const val = event.target.value;
    this.form.get(formControlName).patchValue(val);
    this.validateForrm();
    // console.log(
    //   'senderEmailVal: ',
    //   val,
    //   'formControlName: ',
    //   formControlName,
    //   'senderEmailForm: ',

    //   this.sendEmailForm.get(formControlName).value
    // );
  }
}
/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
