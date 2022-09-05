import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() {}
  getBooks() {
    return [
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
  } 
}
