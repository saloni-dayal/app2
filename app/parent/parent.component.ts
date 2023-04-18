import { Component } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  InputList: Array<string> = [];
  constructor(private _postService: PostService ) {
    this._postService.ModuleTwoSub.subscribe(o => {
      this.InputList.push(o);
    });
  }
  ngOnInit() {}
  
  submit(input: HTMLInputElement) {
    this._postService.ModuleOneSub.next(input.value);
    input.value = "";
  }
}
