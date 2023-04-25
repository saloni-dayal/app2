import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../services/post.service';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-child',
  template: `<h6>Child Module</h6>
	
  <input type="text" #tomoduletwo/>
  <br><br>
  
  <button class="btn btn-primary" (click)="submit(tomoduletwo)">Submit</button>
  <br>
  <br>
  <p>{{ 'Data Sent From Parent Module' | child}}</p>
      <div [ngClass]="{'dark-theme': sharedService.theme === 'dark'}">
        <ng-content></ng-content>
  <div *ngFor="let item of InputList">
  <span>{{item}}</span>
  </div>
  </div>
  `,
  styles: [`
    .dark-theme {
      background-color: #333;
      color: white;
    }
  `]
})
export class ChildComponent {

  data = 'This is some data.';
  cssClass = 'default';

  InputList: Array<string> = [];
  constructor(private _postService: PostService, public sharedService: SharedService) {
    this._postService.ModuleOneSub.subscribe(o => {
      this.InputList.push(o);
    });
  }
  ngOnInit(): void {
    this.sharedService.getCssClass().subscribe((cssClass: string) => {
      this.cssClass = cssClass;
  })
}
  
  submit(input: HTMLInputElement) {
    this._postService.ModuleTwoSub.next(input.value);
    input.value = "";
  }
}

// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-child',
//   template: `
//     <h1>Themed content:</h1>
//     <ng-content></ng-content>
//   `
// })
// export class ChildComponent {}
