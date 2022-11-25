import { Component, OnInit } from '@angular/core';
import {Book} from "./book.model";
import {BooksService} from "./books.service";
import {FormControl, FormGroup} from "@angular/forms";

// enum categories {
//   Naukowe = "Naukowe",
//   Thriller = "Thriller",
//   Fantastyka = "Fantastyka",
//   Piękna = "Piękna"
// }

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  selectedBook: Book;
  signupForm: FormGroup;


  constructor(private bookService: BooksService) {}

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'title': new FormControl(null),
      'author': new FormControl(null),
      'img': new FormControl(null),
      'wishlist': new FormControl(''),
      'category': new FormControl(null)
    });

  }

  onSubmit() {
    const newBook = new Book(
      this.signupForm.value['title'],
      this.signupForm.value['img'],
      this.signupForm.value['author'],
      this.signupForm.value['wishlist'],
      this.signupForm.value['category']
    );

    if(this.signupForm.value['wishlist'] === true) {
      this.bookService.addToWishlist(newBook);
      console.log(this.bookService.getWishlist());
      this.signupForm.reset();
    } else {
      this.bookService.addNewBooks(newBook);
      this.signupForm.reset();
    }
    console.log(this.bookService.getBooks());
  }


}
