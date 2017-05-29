import { async, ComponentFixture, TestBed } from '@angular/core/testing';

//load component
import { HomeComponent } from './home.component';
import { HeaderComponent } from '../header/header.component';
import { BannerComponent } from '../banner/banner.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { LimitedOfferComponent } from '../banner/limited-offer/limited-offer.component';
describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        HeaderComponent,
        BannerComponent,
        CarouselComponent,
        LimitedOfferComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
