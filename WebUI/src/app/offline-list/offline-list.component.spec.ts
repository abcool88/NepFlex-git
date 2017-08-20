import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfflineListComponent } from './offline-list.component';

describe('OfflineListComponent', () => {
  let component: OfflineListComponent;
  let fixture: ComponentFixture<OfflineListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfflineListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfflineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
