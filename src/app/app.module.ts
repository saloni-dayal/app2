import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { DropdownComponent } from './dropdown/dropdown.component';
import { FormsModule } from '@angular/forms';
import { CssSelectorComponent } from './parent/css-selector/css-selector.component';
import { ThemeSwitcherComponent } from './theme-switcher/theme-switcher.component';
import { ThemedBoxComponent } from './child/themed-box/themed-box.component';
import { ChildPipe } from './child/child.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ParentComponent,
    DropdownDirective,
    DropdownComponent,
    CssSelectorComponent,
    ThemeSwitcherComponent,
    ThemedBoxComponent,
    ChildPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
