import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudSpinnerComponent } from './cloud-spinner.component';

describe('CloudSpinnerComponent', () => {
  let component: CloudSpinnerComponent;
  let fixture: ComponentFixture<CloudSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloudSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
