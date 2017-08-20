import { Component, OnInit } from '@angular/core';
import { OfflineDatabaseService } from 'app/shared/services/offline-database/offline-database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offline-list',
  templateUrl: './offline-list.component.html',
  styleUrls: ['./offline-list.component.scss']
})
export class OfflineListComponent implements OnInit {
  allRecords: any;
  constructor(private router: Router, private offlineDatabaseService: OfflineDatabaseService) { }

  ngOnInit() {
    debugger;
    this.offlineDatabaseService.getAllRecords()
      .subscribe(List => {
        this.allRecords = List;
      });
    console.log('ALL Records: ', this.allRecords);
    debugger;
  }
  updateForm(Id: number) {
    this.router.navigateByUrl('/home', Id);
  }

}
