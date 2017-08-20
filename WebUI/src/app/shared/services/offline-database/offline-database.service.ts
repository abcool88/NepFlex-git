import { Injectable } from '@angular/core';
import { OfflineInsert } from 'app/shared/interfaces/offline-insert-list';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class OfflineDatabaseService {
  localDB = null;
  // online = true;
  query: string;
  row: any;
  dataRows: any;
  retrieveData: any = new Array();
  //enteredData: any = [{ id: 1, make: '1', model: '122', year: '', image: '', active: '', remarks: '' }];
  enteredData: Observable<OfflineInsert>;

  constructor(private router: Router, ) { }
  initDB() {
    const shortmodel = 'localDatabase';
    const version = '1.0';
    const displaymodel = 'MyLocalDatabase';
    const maxSize = 65536; // in bytes
    this.localDB = window.openDatabase(shortmodel, version, displaymodel, maxSize);
  }

  createTables() {
    const query = 'CREATE TABLE IF NOT EXISTS OfflineAppraisalls( \
                   id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,\
                   make constchar(50) NULL,\
                   model constchar(50) NULL,\
                   Year datetime NULL,\
                   Image nconstchar(50) NULL,\
                   Active bit NULL,\
                   DateInserted datetime NULL,\
                   Remarks nconstchar(150) NULL\
);';
    this.localDB.transaction(transaction => {
      transaction.executeSql(query, [], () => {
        this.updateStatus('Table \'OfflineAppraisalls\' is present');
      });
    });
  }

  onUpdate(data: OfflineInsert) {
    debugger;
    const id = data.id;
    const make = data.make;
    const model = data.model;
    if (make === '' || model === '') {
      this.updateStatus('\'make\' and \'model\' are required fields!');
    } else {
      const query = 'update OfflineAppraisalls set make=?, model=? where ID=?;';
      this.localDB.transaction(transaction => {
        transaction.executeSql(query, [make, model, id], (transaction, results) => {
          if (!results.rowsAffected) {
            this.updateStatus('Error: No rows affected');
          } else {
            // this.updateForm('', '', '');
            this.updateStatus('Updated rows:' + results.rowsAffected);
            this.getAllRecords();
          }
        });
      });
    }
  }

  onDelete(Id: number) {
    const id = Id;
    const query = 'delete from OfflineAppraisalls where id=?;';
    this.localDB.transaction((transaction) => {

      transaction.executeSql(query, [id], (transaction, results) => {
        if (!results.rowsAffected) {
          this.updateStatus('Error: No rows affected.');
        } else {
          // this.updateForm('', '', '');
          this.updateStatus('Deleted rows:' + results.rowsAffected);
          this.getAllRecords();
        }
      });
    });

  }

  addOffline(data: OfflineInsert) {
    const make = data.make;
    const model = data.model;
    if (make === '' || model === '') {
      this.updateStatus('Error: \'make\' and \'model\' are required fields!');
    } else {
      debugger;
      const query = 'insert into OfflineAppraisalls (make, model) VALUES (?, ?);';
      this.localDB.transaction(transaction => {
        transaction.executeSql(query, [make, model], (transaction, results) => {
          if (!results.rowsAffected) {
            this.updateStatus('Error: No rows affected.');
          } else {
            // this.updateForm('', '', '');
            this.updateStatus('Inserted row with id ' + results.insertId);
            this.getAllRecords();
          }
        });
      });
    }
  }

  getAllRecords() {
    const query = 'SELECT * FROM OfflineAppraisalls;';
    this.localDB.transaction(transaction => {
      transaction.executeSql(query, [], (transaction, results) => {
        this.enteredData = results.rows;
        console.log('RESULTS: ', this.enteredData);

        // for (let i = 0; i < results.rows.length; i++) {
        //   this.retrieveData = results.rows.item(i);
        //   this.enteredData = this.retrieveData;
        // }
      });
    });
  }

  onSelect(Id: number) {
    debugger;
    const id = Id;
    this.query = 'SELECT * FROM OfflineAppraisalls where id=?';
    this.localDB.transaction(transaction => {

      transaction.executeSql(this.query, [id], (transaction, results) => {

        this.row = results.rows.item(0);

        // this.updateForm(this.row['ID'], this.row['make'], this.row['model']);

      });
    });

  }

  // updateForm(id, make, model) {
  //   this.itemForm.get('id').patchValue(id);
  //   this.itemForm.get('make').patchValue(make);
  //   this.itemForm.get('model').patchValue(model);
  // }

  nullDataHandler(transaction, results) { }

  // update view functions

  updateStatus(status) {
    document.getElementById('status').innerHTML = status;
  }

  errorHandler(e) {
    const error = Error;
    this.updateStatus('Error: ' + error);
    return true;
  }
}
