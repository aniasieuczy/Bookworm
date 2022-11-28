import { Component, OnInit } from '@angular/core';
import {Book} from "./book.model";
import {BooksService} from "./books.service";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

interface ICategories {
  label: string;
  value: string;
  checked: boolean;
}

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  selectedBook: Book;
  signupForm: FormGroup;

  // checklistState = [
  //   {
  //     label: 'thriller',
  //     value: 'thriller',
  //     checked: false
  //   },
  //   {
  //     label: 'naukowa',
  //     value: 'naukowa',
  //     checked: true,
  //   },
  //   {
  //     label: 'fantastyka',
  //     value: 'fantastyka',
  //     checked: false
  //   },
  //   {
  //     label: 'piękna',
  //     value: 'piękna',
  //     checked: false
  //   },
  // ];

  constructor(private bookService: BooksService) {
  }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'title': new FormControl(null, Validators.required),
      'author': new FormControl(null, Validators.required),
      'img': new FormControl(null),
      'category': new FormControl(null),
      'wishlist': new FormControl('')
    });
  }

  onSubmit() {
    const newBook = new Book(
      this.signupForm.value['title'],
      this.signupForm.value['img'],
      this.signupForm.value['author'],
      this.signupForm.value['category'],
      this.signupForm.value['wishlist'],
    );

    if (this.signupForm.value['wishlist'] === true) {
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


