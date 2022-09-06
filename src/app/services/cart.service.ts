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
  }

  get() {
    return this.cart
  }

  delete(i: number) {
    this.cart.splice(i, 1)
  }
}
