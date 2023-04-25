import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';


@Component({
  selector: 'app-themed-box',
  template: `
    <div class="themed-box" [ngClass]="{'dark-theme': sharedService.theme === 'dark'}">
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    .themed-box {
      padding: 10px;
      border: 1px solid black;
    }
    .dark-theme {
      background-color: #333;
      color: white;
    }
  `]
})
export class ThemedBoxComponent {
  constructor(public sharedService: SharedService) {}
}
