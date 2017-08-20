import { Injectable } from '@angular/core';

@Injectable()
export class CheckInternetStatus {
  online = true;
  constructor() { }

  // online/offline
  netOnlineOrOffline() {
    this.Online();
    this.ChangeStatus();
    return {
      Online: this.Online,
      ChangeStatus: this.ChangeStatus
    };
  }

  Online() {
    return navigator.onLine;
  }

  ChangeStatus() {
    if (this.online !== this.Online()) {
      this.online = this.Online();
      const s = ('#status');
    }
  }
}
