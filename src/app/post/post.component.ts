import { Component, Input, OnInit } from '@angular/core';
import { IPost } from '../interfeces/post.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
})
export class PostComponent implements OnInit {
  @Input() post: IPost

  constructor() {

  }
  ngOnInit() {
    console.log('ja tyt');
    console.log(this.post);
  }
}
