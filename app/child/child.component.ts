import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../services/post.service';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  InputList: Array<string> = [];
  constructor(private _postService: PostService ) {
    this._postService.ModuleOneSub.subscribe(o => {
      this.InputList.push(o);
    });
  }
  ngOnInit() {}
  
  submit(input: HTMLInputElement) {
    this._postService.ModuleTwoSub.next(input.value);
    input.value = "";
  }
}
