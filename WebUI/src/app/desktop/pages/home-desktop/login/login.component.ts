import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  })
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  validateForrm(e: Event) {
    const formValue1 = this.form.get('username').value;
    const formValue2 = this.form.get('password').value;
    console.log('username', formValue1 + ' and ' + formValue2);
  }
}
