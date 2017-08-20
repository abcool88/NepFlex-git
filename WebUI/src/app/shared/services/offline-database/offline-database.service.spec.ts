import { TestBed, inject } from '@angular/core/testing';

import { OfflineDatabaseService } from './offline-database.service';

describe('OfflineDatabaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OfflineDatabaseService]
    });
  });

  it('should be created', inject([OfflineDatabaseService], (service: OfflineDatabaseService) => {
    expect(service).toBeTruthy();
  }));
});
