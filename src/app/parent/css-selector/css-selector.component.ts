import { Component } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-css-selector',
  template: `
    <select (change)="changeCssClass($event.target.value)">
      <option value="default">Default</option>
      <option value="red">Red</option>
      <option value="green">Green</option>
      <option value="blue">Blue</option>
    </select>
  `
})
export class CssSelectorComponent {
  constructor(private sharedService: SharedService) {}

  changeCssClass(cssClass: string) {
    this.sharedService.setCssClass(cssClass);
  }
}
