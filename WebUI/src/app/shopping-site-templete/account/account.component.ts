import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  form: FormGroup;
  accountInfo: FormControl;
  loginRegister: boolean;

  loginForm: any;
  registerForm: any;
  title: string;

  constructor(private fb: FormBuilder) {
    this.loginForm = [
      { id: '1', label: 'Email', value: 'enter Email ID' },
      { id: '2', label: 'Password', value: 'enter Password' },
    ];

    this.registerForm = [
      { id: '1', label: 'FullName', value: 'enter fullname in payment method' },
      { id: '2', label: 'Address1', value: 'enter address1' },
      { id: '3', label: 'Address2', value: 'optional' },
      { id: '4', label: 'City', value: 'enter city' },
      { id: '5', label: 'State', value: 'enter state' },
      { id: '6', label: 'Country', value: 'enter country' },
      { id: '7', label: 'Zip', value: 'enter zip code' },
      { id: '8', label: 'Email', value: 'enter Email id for invoice' },
    ];
  }

  ngOnInit() {
    this.title = 'Login';
    this.loginRegister = false;
    this.createForm();
  }
  createForm() {
    this.form = this.fb.group({
      accountInfo: '',
    });
  }
  checkedOrNot(event) {
    const btnClickTo = this.form.get('accountInfo').value;
    console.log('btn Clicked To : ' + btnClickTo);
    if (btnClickTo === 'Login') {
      this.title = 'Login';
      this.loginRegister = false;
    } else {
      this.title = 'Register';
      this.loginRegister = true;
    }

  }
}
