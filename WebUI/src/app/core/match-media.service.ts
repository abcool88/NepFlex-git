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

    constructor() { }

    // Check = function (mq: MediaQueryList): void {
    //     if (!mq) {
    //         return;
    //     }
    //     return window.matchMedia(mq).matches;
    // };

    // Methods for checking type.....
    IsPhone = (): boolean => {
        return window.matchMedia(this.rules.phone).matches;
    }

    IsTablet = (): boolean => {
        return window.matchMedia(this.rules.tablet).matches;
    }

    IsDesktop = (): boolean => {
       return window.matchMedia(this.rules.desktop).matches;
    }

    IsPortrait = (): boolean => {
        return window.matchMedia(this.rules.portrait).matches;
    }

    IsLandscape = (): boolean => {
        return window.matchMedia(this.rules.landscape).matches;
    }

    IsRetina = (): boolean => {
        return window.matchMedia(this.rules.retina).matches;
    }

    // Event listeners by type.....
    OnPhone(callBack: (mediaQueryList: MediaQueryList) => void): void {
        if (typeof callBack === 'function') {
            const mql: MediaQueryList = window.matchMedia(this.rules.phone);

            mql.addListener((mql: MediaQueryList) => {
                if (mql.matches) {
                    callBack(mql);
                }
            });
        }
    }

    OnTablet(callBack: (mediaQueryList: MediaQueryList) => void): void {
        if (typeof callBack === 'function') {
            const mql: MediaQueryList = window.matchMedia(this.rules.tablet);

            mql.addListener((mql: MediaQueryList) => {
                if (mql.matches) {
                    callBack(mql);
                }
            });
        }
    }

    OnDesktop(callBack: (mediaQueryList: MediaQueryList) => void): void {
        if (typeof callBack === 'function') {
            const mql: MediaQueryList = window.matchMedia(this.rules.desktop);

            mql.addListener((mql: MediaQueryList) => {
                if (mql.matches) {
                    callBack(mql);
                }
            });
        }
    }

    OnPortrait(callBack: (mediaQueryList: MediaQueryList) => void): void {
        if (typeof callBack === 'function') {
            const mql: MediaQueryList = window.matchMedia(this.rules.portrait);

            mql.addListener((mql: MediaQueryList) => {
                if (mql.matches) {
                    callBack(mql);
                }
            });
        }
    }

    OnLandscape(callBack: (mediaQueryList: MediaQueryList) => void): void {
        if (typeof callBack === 'function') {
            const mql: MediaQueryList = window.matchMedia(this.rules.landscape);

            mql.addListener((mql: MediaQueryList) => {
                if (mql.matches) {
                    callBack(mql);
                }
            });
        }
    }
}
