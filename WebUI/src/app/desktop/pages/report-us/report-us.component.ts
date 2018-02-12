import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-report-us',
  templateUrl: './report-us.component.html',
  styleUrls: ['./report-us.component.scss']
})
export class ReportUsComponent implements OnInit {
  reportForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createReportForm();
  }

  ngOnInit() {}
  createReportForm() {
    this.reportForm = this.fb.group({
      fullName: '',
      email: '',
      url: '',
      details: ''
    });
  }
}
