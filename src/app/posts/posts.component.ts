import { Component } from '@angular/core';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})



export class PostsComponent {
  img = 'https://repository-images.githubusercontent.com/37153337/9d0a6780-394a-11eb-9fd1-6296a684b124';
  title = '';
  background = true;
  items = [2, 'title', 'description'];
  objs = [
    {title: 'Post 1', author: 'Vladilen', comments: [
        {name: 'Max', text: 'lorem 1'},
        {name: 'Max', text: 'lorem 2'},
        {name: 'Max', text: 'lorem 3'},
      ]},
    {title: 'Post 2', author: 'Vladilen 2', comments: [
        {name: 'Max 2', text: 'lorem 1'},
        {name: 'Max 2', text: 'lorem 2'},
        {name: 'Max 2', text: 'lorem 3'},
      ]}
  ];
  nowDate: Date = new Date();

  constructor() {
    setTimeout(() => {
      this.img = 'https://repository-images.githubusercontent.com/24195339/87018c00-694b-11e9-8b5f-c34826306d36'
    }, 5000)
  }



  onInput(event: any): void {
    this.title = event.target.value
  }

  onButton() {
   this.background = !this.background;

   console.log(this.background);
  }

}


