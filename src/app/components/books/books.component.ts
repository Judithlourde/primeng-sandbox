import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../types/Book';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  
  constructor( private bookService: BookService ) { 
    
    // console.log({Constructor: 'Constructor'})
  }
  books: Book[] = [];

  value!: string;
  isShowing: boolean = false;
  isDisabled: boolean = false;

  ngOnInit(): void {
    // console.log({OnInIt: 'From OnIt'})
    this.books = this.bookService.getBooks();
  }
 

  handleClick() {
    // console.log('It is working!');
    this.isDisabled = true;
  }

  handleInput(event: any) {
    console.log(event);
  }

  toggleBooks() {
    this.isShowing = !this.isShowing;
  }

  // addToCart(event: any) {
    // this.cart.push(event);
    // this.cart.forEach(function(item) {
    //   item.name
    //   console.log(item.amount);
    // }); 
  // }
}
