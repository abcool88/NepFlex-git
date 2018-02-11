import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSearchOverlayComponent } from './home-search-overlay.component';

describe('HomeSearchOverlayComponent', () => {
  let component: HomeSearchOverlayComponent;
  let fixture: ComponentFixture<HomeSearchOverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSearchOverlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSearchOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
