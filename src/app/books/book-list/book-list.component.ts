import {Component, Input, OnInit} from '@angular/core';

import {BooksService} from "../books.service";
import { Book } from "../book.model";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.books = this.booksService.getBooks();
    this.booksService.booksChanged
      .subscribe(
        (books: Book[]) => {
          this.books = books;
        }
      )
  }

}
