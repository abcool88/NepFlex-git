import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { FormControl, FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';


import { HeaderComponent } from './header.component';
import { BannerComponent } from '../banner/banner.component';
import { SpinnerComponent } from 'app/shared/spinner/spinner.component';
import { MenuNavComponent } from 'app/header/menu-nav/menu-nav.component';
import { OrderByPipe } from 'app/shared/pipes/order-by.pipe';
import { CamelCase } from 'app/shared/pipes/camelcase.pipe';
describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, RouterModule, RouterTestingModule],
      declarations: [HeaderComponent, MenuNavComponent, SpinnerComponent, OrderByPipe, CamelCase],
      providers: []
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
