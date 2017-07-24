import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuNavComponent } from './menu-nav.component';
import { OrderByPipe } from 'app/shared/pipes/order-by.pipe';

describe('MenuNavComponent', () => {
  let component: MenuNavComponent;
  let fixture: ComponentFixture<MenuNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [OrderByPipe],
      declarations: [MenuNavComponent],
      providers: []
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
