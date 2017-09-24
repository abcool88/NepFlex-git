import { Component, OnInit } from '@angular/core';
import { OfflineDatabaseService } from 'app/shared/services/offline-database/offline-database.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { OfflineInsert } from 'app/shared/interfaces/offline-insert-list';

@Component({
  selector: 'app-offline-list',
  templateUrl: './offline-list.component.html',
  styleUrls: ['./offline-list.component.scss']
})
export class OfflineListComponent implements OnInit {
  allRecords: any;
  constructor(private router: Router,
    private offlineDatabaseService: OfflineDatabaseService) {
  }

  ngOnInit() {
    this.allRecords = this.offlineDatabaseService.enteredData;
  }

  updateForm(Id: number) {
    this.router.navigateByUrl('/home', Id);
  }

}
