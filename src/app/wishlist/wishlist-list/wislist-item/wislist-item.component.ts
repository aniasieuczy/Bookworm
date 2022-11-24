import {Component, Input, OnInit} from '@angular/core';
import {Book} from "../../../books/book.model";
import {BooksService} from "../../../books/books.service";

@Component({
  selector: 'app-wislist-item',
  templateUrl: './wislist-item.component.html',
  styleUrls: ['./wislist-item.component.scss']
})
export class WislistItemComponent implements OnInit {
  @Input() wishlist: Book;
  selectedBookIndex: number;

  constructor(private bookService: BooksService) {}

  ngOnInit(): void {
    this.bookService.bookSelected.subscribe(
      (index: number) => {
        this.selectedBookIndex = index;
      }
    )
  }

  onMarkAsOwned() {
    this.bookService.delete(this.selectedBookIndex);
  }

}
