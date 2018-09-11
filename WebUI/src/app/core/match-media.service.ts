import { Injectable } from '@angular/core';

export interface IMathMediaService {
  print: string;
  screen: string;
  phone: string;
  tablet: string;
  desktop: string;
  portrait: string;
  landscape: string;
  retina: string;
}

@Injectable()
export class MatchMediaService {
  // From: https://stackoverflow.com/questions/38442091/how-to-do-responsive-components-in-angular2
  rules: IMathMediaService = {
    print: 'print',
    screen: 'screen',
    phone: '(max-width: 767px)',
    tablet: '(min-width: 768px) and (max-width: 1024px)',
    desktop: '(min-width: 1025px)',
    portrait: '(orientation: portrait)',
    landscape: '(orientation: landscape)',
    retina: '(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)'
  };

  constructor() {}

  // Check = function (mq: MediaQueryList): void {
  //     if (!mq) {
  //         return;
  //     }
  //     return window.matchMedia(mq).matches;
  // };

  // Methods for checking type.....
  IsPhone = (): boolean => {
    return window.matchMedia(this.rules.phone).matches;
  };

  IsTablet = (): boolean => {
    return window.matchMedia(this.rules.tablet).matches;
  };

  IsDesktop = (): boolean => {
    return window.matchMedia(this.rules.desktop).matches;
  };

  IsPortrait = (): boolean => {
    return window.matchMedia(this.rules.portrait).matches;
  };

  IsLandscape = (): boolean => {
    return window.matchMedia(this.rules.landscape).matches;
  };

  IsRetina = (): boolean => {
    return window.matchMedia(this.rules.retina).matches;
  };

  // Event listeners by type.....
  OnPhone(callBack: (mediaQueryList: MediaQueryList) => void): void {
    if (typeof callBack === 'function') {
      const mql: MediaQueryList = window.matchMedia(this.rules.phone);

      mql.addListener((xyz: MediaQueryList) => {
        if (xyz.matches) {
          callBack(xyz);
        }
      });
    }
  }

  OnTablet(callBack: (mediaQueryList: MediaQueryList) => void): void {
    if (typeof callBack === 'function') {
      const ql: MediaQueryList = window.matchMedia(this.rules.tablet);

      ql.addListener((abc: MediaQueryList) => {
        if (abc.matches) {
          callBack(abc);
        }
      });
    }
  }

  OnDesktop(callBack: (mediaQueryList: MediaQueryList) => void): void {
    if (typeof callBack === 'function') {
      const mql: MediaQueryList = window.matchMedia(this.rules.desktop);

      mql.addListener((mno: MediaQueryList) => {
        if (mno.matches) {
          callBack(mno);
        }
      });
    }
  }

  OnPortrait(callBack: (mediaQueryList: MediaQueryList) => void): void {
    if (typeof callBack === 'function') {
      const mql: MediaQueryList = window.matchMedia(this.rules.portrait);

      mql.addListener((pqr: MediaQueryList) => {
        if (pqr.matches) {
          callBack(pqr);
        }
      });
    }
  }

  OnLandscape(callBack: (mediaQueryList: MediaQueryList) => void): void {
    if (typeof callBack === 'function') {
      const mql: MediaQueryList = window.matchMedia(this.rules.landscape);

      mql.addListener((stu: MediaQueryList) => {
        if (stu.matches) {
          callBack(stu);
        }
      });
    }
  }
}
