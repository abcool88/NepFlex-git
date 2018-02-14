import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReportService } from 'app/shared/services/report.service';
import { ReportGetData } from 'app/shared/ResourceModels/ReportGetData';
import { window } from 'rxjs/operators/window';
import { async } from '@angular/core/testing';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report-us',
  templateUrl: './report-us.component.html',
  styleUrls: ['./report-us.component.scss']
})
export class ReportUsComponent implements OnInit {
  reportForm: FormGroup;
  reportedDataList: ReportGetData[] = new Array();
  infoPageLabel: string = 'No Report Found';
  showInfoPage: boolean = false;

  constructor(private fb: FormBuilder, private reportService: ReportService, private route: Router) {
    this.createReportForm();
    this.getReportedData();
  };

  ngOnInit() {}
  createReportForm() {
    this.reportForm = this.fb.group({
      name: '',
      email: '',
      url: '',
      detail: ''
    });
  }
  populateReportForm() {
    if (!this.reportForm) {
      return;
    }
  }

  getReportedData() {
    this.reportService.getReports().subscribe(a => {
      this.reportedDataList = a;
      // console.log('this.reportedDataList.length', this.reportedDataList.length);
      if (this.reportedDataList.length > 0) {
      } else {
        this.showInfoPage = true;
      }
    });
  }
  checkValidation(): boolean {
    if (!this.reportForm.get('name').value) {
      return false;
    }
    if (!this.reportForm.get('email').value) {
      return false;
    }
    if (!this.reportForm.get('url').value) {
      return false;
    }
    if (!this.reportForm.get('detail').value) {
      return false;
    }
    return true;
  }
  saveReport() {
    if (!this.checkValidation()) {
      return;
    } else {
      const para = Object.assign(new ReportGetData(), this.reportForm.value);
      this.reportService.AddReports(para);
    }
  }
}
