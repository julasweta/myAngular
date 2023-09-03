import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { IPost } from 'src/app/interfeces/post.interface';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
})
export class PostFormComponent implements OnInit  {
  text: '';
  title: '';

  /* @Output() для передачі данних наверх, а нижче ми вкладаємо для передачі нашу змінну post*/
  /* в <app-post-form> ми звязуємо  onAdd і функцію, куди треба передати дані в posts.component*/
  @Output() onAdd: EventEmitter<IPost> = new EventEmitter<IPost>();

  //@ViewChild для отримання данних з кнопки, яка має маркер 'inputTitle'
  //ще є директива @ContentChild яка так само отримує дані з блоку <div #div></div> для прикладу
  @ViewChild('inputTitle')
  inputTitleRef: ElementRef

  @ViewChild('inputText')
  inputTextRef: ElementRef

  constructor() { }

  ngOnInit() { }


  onTitleInput(value:  any | string) {
    // Отримуємо дані зразу при введенні у полі inputTitle
    console.log("inputTitle:", value.target.value);
  }


  //функція, яка витягує дані з форми
  onSubmit(title: string, text: string) {
    const post: IPost = {
      id: Math.floor(Math.random() * (100 - 2 + 1)) + 2,
      title: title,
      text: text,
    };
    //тут дані які ми витягнули з форми передаємо в onAdd для передачі в <app-post-form>
    this.onAdd.emit(post);
    this.title = '';
    this.text = '';
    // тут отримуємо дані з кнопки inputTitle, яку ми ініціювали вище
    console.log(this.inputTitleRef.nativeElement.value);
    console.log(this.inputTextRef.nativeElement.value);
  }

}
