import { Component, Input, OnInit } from '@angular/core';
import { IPost } from '../interfeces/post.interface';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
})
export class PostsComponent implements OnInit {
  posts: IPost[] = [
    { title: 'Hello first post', id: 1, text: 'Hello first post' },
    { title: 'Hello second post', id: 2, text: 'Hello second post' },
    { title: 'Hello third post', id: 3, text: 'Hello third post' },
  ];


  onUpdatePosts(post: IPost): void {
    this.posts = [...this.posts, post];
  }

  ngOnInit() {}
}
