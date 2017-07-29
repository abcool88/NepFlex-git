import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCarosuelComponent } from './product-carosuel.component';

describe('ProductCarosuelComponent', () => {
  let component: ProductCarosuelComponent;
  let fixture: ComponentFixture<ProductCarosuelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCarosuelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCarosuelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
