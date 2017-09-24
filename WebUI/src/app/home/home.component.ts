import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { BannerComponent } from '../banner/banner.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { LoaderService } from '../../app/shared/services/loader.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CheckInternetStatus } from 'app/shared/controls/check-internet-status/check-internet-status';
import { OfflineDatabaseService } from 'app/shared/services/offline-database/offline-database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  itemForm: FormGroup;

  constructor(private router: Router,private fb: FormBuilder, private checkInternetStatus: CheckInternetStatus,
    private offlineDatabaseService: OfflineDatabaseService) {
    this.checkInternetStatus.netOnlineOrOffline();
    this.createForm();
  }

  createForm() {
    this.itemForm = this.fb.group({
      id: '',
      make: '',
      model: ''
    });
  }

  ngOnInit(): void {
    if (!window.openDatabase) {
      this.offlineDatabaseService.updateStatus('Error: DB not supported');
    } else {
      //this.offlineDatabaseService.initDB();
      //this.offlineDatabaseService.createTables();
      //this.offlineDatabaseService.getAllRecords();
    }
  }
  onCreate() {
    this.offlineDatabaseService.addOffline(this.itemForm.value);
    //this.router.navigateByUrl('');
  }
}
