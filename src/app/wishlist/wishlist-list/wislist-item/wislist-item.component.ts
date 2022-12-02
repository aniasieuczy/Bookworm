import {Component, Input, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {Book} from "../../../books/book.model";
import {BooksService} from "../../../books/books.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-wislist-item',
  templateUrl: './wislist-item.component.html',
  styleUrls: ['./wislist-item.component.scss']
})
export class WislistItemComponent implements OnInit {
  @Input() wishlist: Book;
  @Input() indx: number;

  constructor(private bookService: BooksService) {
  }

  ngOnInit(): void {
  }

  markAsOwned() {
    this.bookService.addNewBooks(this.bookService.getBookFromWishlist(this.indx));
    this.bookService.delete(this.indx);
  }


}
