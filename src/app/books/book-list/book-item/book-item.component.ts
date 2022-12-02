import {Component, Input, OnInit} from '@angular/core';
import  {BooksService } from "../../books.service";
import {Book} from "../../book.model";
import { Router } from "@angular/router";

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {
  @Input() book: Book;
  // @Input() selectedBookIndex: number;
  @Input() index: number;


  constructor(private booksService: BooksService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  addToWishlist() {
    //console.log(this.selectedBookIndex);
    console.log(this.index);
    let bookToBeAdded = this.booksService.getBook(this.index);
    // console.log(this.selectedBookIndex);
    this.booksService.addToWishlist(bookToBeAdded);
    this.router.navigate(['/wishlist']);
    this.booksService.deleteFromBooks(this.index);
  }

}
