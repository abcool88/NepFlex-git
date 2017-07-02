import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ModalComponent } from '../shared/modal/modal.component';
@Component({
  selector: 'app-billing-shipping',
  templateUrl: './billing-shipping.component.html',
  styleUrls: ['./billing-shipping.component.scss']
})
export class BillingShippingComponent implements OnInit {
  @ViewChild(ModalComponent) modal: ModalComponent;
  form: FormGroup;
  differentShippingAddress: FormControl;
  reviewBeforeConfirm: FormControl;

  billingCheckout: any;
  paymentMethod: any;
  differentShipping: boolean;
  showPopUpModel: boolean;
  modaltit: FormControl;

  constructor(private fb: FormBuilder) {

    this.differentShipping = false;
    this.showPopUpModel = false;

    this.billingCheckout = [
      { id: '1', label: 'FullName', value: 'enter fullname in payment method' },
      { id: '2', label: 'Address1', value: 'enter address1' },
      { id: '3', label: 'Address2', value: 'optional' },
      { id: '4', label: 'City', value: 'enter city' },
      { id: '5', label: 'State', value: 'enter state' },
      { id: '6', label: 'Country', value: 'enter country' },
      { id: '7', label: 'Zip', value: 'enter zip code' },
      { id: '8', label: 'Email', value: 'enter Email id for invoice' },
    ];
    this.paymentMethod = [
      { id: '1', label: 'Card Number', value: 'enter card number', other: 'true' },
      { id: '2', label: 'Expiry', value: 'month', other: 'false' },
      { id: '3', label: '', value: 'year', other: 'false' },
      { id: '4', label: 'CVV', value: 'enter CVV code', other: 'false' },
    ];
    this.createForm();
  }

  ngOnInit() {
  }
  createForm() {
    this.form = this.fb.group({
      differentShippingAddress: '',
      reviewBeforeConfirm: '',
      modaltit: ''
    });
  }
  checkedOrNot(event) {
    const billingshippingaddr = this.form.get('differentShippingAddress').value;
    if (billingshippingaddr === 'yes') {
      this.differentShipping = true;

    } else {
      this.differentShipping = false;
    }

  }

  reviewOrConfirm(event) {
   // console.log(this.form.get('reviewBeforeConfirm').value);
    const reviewBeforeConfirm = this.form.get('reviewBeforeConfirm').value;
    if (reviewBeforeConfirm === 'yes') {
      this.showPopUpModel = true;
      this.modal.modaltitle = 'hello';
      this.modal.modalbody = 'this is body';
      this.modal.modalfooter = 'this is footer';
    } else {
      this.showPopUpModel = false;
    }
  }


}
