import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Book } from '../../types/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book!: Book;
  @Output() bookEmitter = new EventEmitter<Book>();
  // myInterval: any = null;
  constructor() { }

  ngOnInit(): void {
    // this.myInterval = setInterval(() => {
    //   console.log('hello')
    // }, 1000)
  }

  // ngOnDestroy(): void {
  //   clearInterval(this.myInterval)
  //   console.log({ onDestroy: 'Destroy' })
  // }

  addToCart() {
    this.bookEmitter.emit(this.book);
  }

}
