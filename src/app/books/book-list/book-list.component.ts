import {Component, Input, OnInit} from '@angular/core';

import {BooksService} from "../books.service";
import { Book } from "../book.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  selectedBookIndex: number;

  constructor(private booksService: BooksService,
              private router: Router) { }

  ngOnInit(): void {
    this.books = this.booksService.getBooks();
    this.booksService.booksChanged
      .subscribe(
        (books: Book[]) => {
          this.books = books;
        }
      )
  }

  addToWishlist(index: number) {
    let addWishlist = this.booksService.getBook(index);
    this.booksService.addToWishlist(addWishlist);
    this.booksService.deleteFromBooks(index);
    this.router.navigate(['/wishlist']);
    console.log(this.booksService.getBook(index));
  }


}
