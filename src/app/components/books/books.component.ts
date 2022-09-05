import { Component, OnInit } from '@angular/core';
import { Book } from '../../types/Book';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  
  value!: string;
  isShowing: boolean = false;
  isDisabled: boolean = false;

  cart: Book[] = [];

  books: Book[] = [
    {
      name: "The Cat Kid Comic Club",
      author: "Dav Pilkey",
      image: "https://riachristiecollections.com/wp-content/uploads/2022/06/9781338801941-5.jpg",
      amount: 100
    },
    {
      name: "The 20th-Century Children's Book Treasury",
      author: "Janet Schulman",
      image: "https://d3525k1ryd2155.cloudfront.net/f/471/886/9780679886471.RH.0.m.jpg",
      amount: 150
    },
    {
      name: "I Love You to the Moon And Back",
      author: "Little Tiger Press",
      image: "https://images.kidsbooks.com/covers/large/isbn978158/9781589255517-l.jpg",
      amount: 95
    }
  ];

  constructor() { 
    console.log({Constructor: 'Constructor'})
  }

  ngOnInit(): void {
    console.log({OnInIt: 'From OnIt'})
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

  addToCart(event: any) {
    this.cart.push(event);
    this.cart.forEach(function(item) {
      item.name
      console.log(item.amount);
    }); 
  }
}
