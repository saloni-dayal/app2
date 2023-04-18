import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../services/post.service';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  data = 'This is some data.';
  cssClass = 'default';

  InputList: Array<string> = [];
  constructor(private _postService: PostService, private sharedService: SharedService ) {
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
