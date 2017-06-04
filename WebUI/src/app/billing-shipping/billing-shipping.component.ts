import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-billing-shipping',
  templateUrl: './billing-shipping.component.html',
  styleUrls: ['./billing-shipping.component.scss']
})
export class BillingShippingComponent implements OnInit {
  form: FormGroup;
  differentShippingAddress: FormControl;

  billingCheckout: any;
  differentShipping: boolean;
  constructor(private fb: FormBuilder) {
    this.differentShipping = false;
    this.billingCheckout = [
      { id: '1', label: 'FullName', value: 'enter fullname in payment method' },
      { id: '2', label: 'Address1', value: 'enter address1' },
      { id: '3', label: 'Address2', value: 'optional' },
      { id: '4', label: 'City', value: 'enter city' },
      { id: '5', label: 'State', value: 'enter state' },
      { id: '6', label: 'Country', value: 'enter country' },
      { id: '7', label: 'Zip', value: 'enter zip code' }
    ];
    this.createForm();
  }

  ngOnInit() {
  }
  createForm() {
    this.form = this.fb.group({
      differentShippingAddress: '',
    });
  }
  checkedOrNot(event, condition: any) {
    const billingshippingaddr = this.form.get('differentShippingAddress').value;
    if (billingshippingaddr === 'yes') {
      this.differentShipping = true;

    } else {
      this.differentShipping = false;
    }

  }

}
