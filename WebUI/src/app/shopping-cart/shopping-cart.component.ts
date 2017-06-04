import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  form: FormGroup;
  code: FormControl;

  isEmpty: boolean;
  showApplyCode: boolean;
  showAppliedCode: boolean;

  appliedCode: any;
  emptyOrderDetail: any;
  constructor(private fb: FormBuilder) {
    this.createForm();
    this.emptyOrderDetail = [
      { id: '1', label: 'Price Before', value: '$0.0' },
      { id: '2', label: 'Discount', value: '$0.0' },
      { id: '3', label: 'Shipping Fee', value: '$0.0' },
      { id: '4', label: 'Total Amount', value: '$0.0' }
    ];
  }

  ngOnInit() {
    this.isEmpty = true;
    this.showApplyCode = true;
    this.showAppliedCode = false;
  }
  createForm() {
    this.form = this.fb.group({
      code: '',
    });
  }
  applyCode(event) {
    this.showApplyCode = !this.showApplyCode;
  }
  afterApplyCode() {
    this.showApplyCode = !this.showApplyCode;
    this.appliedCode = this.form.get('code').value;
    if (this.appliedCode) {
      this.showAppliedCode = true;
    } else {
      this.showAppliedCode = false;
    }
  }

}
