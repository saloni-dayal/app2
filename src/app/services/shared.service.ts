import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private cssClassSubject = new BehaviorSubject<string>('default');

  setCssClass(cssClass: string) {
    this.cssClassSubject.next(cssClass);
  }

  getCssClass() {
    return this.cssClassSubject.asObservable();
  }
}
