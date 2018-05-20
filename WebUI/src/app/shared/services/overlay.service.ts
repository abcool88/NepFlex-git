import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable()
export class OverlayService {

  private isOverlayOn: Subject<boolean> = new Subject<boolean>();
  public isOverlayOn$: Observable<boolean> = this.isOverlayOn.asObservable();

  constructor() { }

  public TurnOnOverlay() {
    document.documentElement.style.overflow = 'hidden';
    this.isOverlayOn.next(true);
  }

  public turnOffOverlay() {
    document.documentElement.style.overflow = '';
    this.isOverlayOn.next(false);
  }
}

