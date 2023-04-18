import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class PostService {
  SharingData: Subject<any> = new Subject<any>();
  ModuleOneSub: Subject<any> = new Subject<any>();
  ModuleTwoSub: Subject<any> = new Subject<any>();

  
  private cssClassSubject = new BehaviorSubject<string>('default');

  setCssClass(cssClass: string) {
    this.cssClassSubject.next(cssClass);
  }

  getCssClass() {
    return this.cssClassSubject.asObservable();
  }
  constructor() { }

}
