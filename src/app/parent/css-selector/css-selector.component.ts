import { Component } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-css-selector',
  template: `

<select (change)="onThemeSelected($event.target.value)">
      <option value="default">Default</option>
      <option value="dark">Dark</option>
    </select>
<!-- 
    <select class="form-select" (change)="changeCssClass($event.target.value)">
      <option value="black">Default</option>
      <option value="red">Red</option>
      <option value="green">Green</option>
      <option value="blue">Blue</option>
    </select>
    <br> -->
  `
})
export class CssSelectorComponent {
  constructor(private sharedService: SharedService) {}

  onThemeSelected(theme: string) {
    this.sharedService.theme = theme;
  }

  changeCssClass(cssClass: string) {
    this.sharedService.setCssClass(cssClass);
  }
}
