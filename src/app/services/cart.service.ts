import { Injectable } from '@angular/core';
import { Book } from'../types/Book';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Book[] = [];

  constructor() { }

  add(book: Book) {
      this.cart.push(book);
      console.log(this.cart);
      // this.cart.forEach(function(item) {
      // item.name
      // console.log(item.amount);
    // }); 
  }

  get() {
    //   return this.cart.forEach(function(item) {
    //   item.name
    //   console.log(item.amount);
    // }); 
    return this.cart;
  }
}
