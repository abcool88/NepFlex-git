import { Component, OnInit, NgZone } from '@angular/core';
import { MatchMediaService } from 'app/core/match-media.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  showMobileVersion: boolean = false;
  showDesktopVersion: boolean = false;
  mobileOrDesktop: string;
  constructor(
    private zone: NgZone,
    private matchMediaService: MatchMediaService,
    // private router: Router,
    private route: ActivatedRoute
  ) {
    // Get initial values based on device widths at time the app renders.
    this.showMobileVersion =
      this.matchMediaService.IsTablet() && this.matchMediaService.IsPortrait();

    // const that: HomePageComponent = this;

    // Tap into desired listeners for when the device width changes.....
    this.route.params.subscribe((params: { [key: string]: string }) => {
      this.mobileOrDesktop = params['windowView'];
    });

    switch (this.mobileOrDesktop) {
      case 'desktop':
        this.showMobileVersion = false;
        break;
      case 'mobile':
        this.showMobileVersion = true;
        break;
      default:
        if (this.showMobileVersion) {
          const element: HTMLElement = document.getElementsByTagName('html')[0];
          element.style.fontSize = '24px';
        }
    }
  }

  ngOnInit(): void {
    console.log('it comes to home component..');
  }

  ShowHomePage(): void {
    this.zone.run(() => {
      // Change the property within the zone, CD will run after
      this.showMobileVersion =
        this.matchMediaService.IsTablet() &&
        this.matchMediaService.IsPortrait();
      if (this.showMobileVersion) {
        const element: HTMLElement = document.getElementsByTagName('html')[0];
        element.style.fontSize = '24px';
      }
    });
  }
}
