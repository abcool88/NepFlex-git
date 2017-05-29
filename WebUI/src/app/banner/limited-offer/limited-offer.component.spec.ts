import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LimitedOfferComponent } from './limited-offer.component';

describe('LimitedOfferComponent', () => {
  let component: LimitedOfferComponent;
  let fixture: ComponentFixture<LimitedOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LimitedOfferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LimitedOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
