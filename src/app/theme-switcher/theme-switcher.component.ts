import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-theme-switcher',
  template: `
    <select [(ngModel)]="selectedTheme" (ngModelChange)="themeSelected.emit(selectedTheme)">
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  `
})
export class ThemeSwitcherComponent {
  selectedTheme = 'light';
  @Output() themeSelected = new EventEmitter<string>();
}
