import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Book } from '../../types/Book';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})


export class CartComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.getCart();
  }

  getCart() {
    // console.log(this.cartService.get())
    return this.cartService.get();
  }

  
  // cartItems() {
  //   this.getCart.forEach.(function(item) {
  //     console.log(item)
  //   })
  // }
}
