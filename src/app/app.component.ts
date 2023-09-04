import { Component, OnInit } from '@angular/core';

@Component ({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'first pipe';
  e: any = 8500000;
  obj: any = {
    a: 1, b: 2, c: 3, d: 4, f: {
      art: {
        count:
          ' gfkfk'
      }
    }
  }
  
  search: string = '';
  posts = [
    {title: 'Beer', text: 'Самое лучшее пиво в мире'},
    {title: 'Bread', text: 'The best bread in the world'},
    {title: 'Javascript', text: 'The best language in the world'},
  ];

  ngOnInit(){
    console.log('search',this.search);
  }

}
