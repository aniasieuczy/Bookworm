import {Component, Input, OnInit} from '@angular/core';
import  {BooksService } from "../../books.service";
import {Book} from "../../book.model";


@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {
  @Input() book: Book = {author: 'Anna Szpecht', title: 'test', imagePath: 'testowa'};

  constructor(private bookService: BooksService) {
  }

  ngOnInit(): void {
  }

  onSelected() {
    this.bookService.bookSelected.emit(this.book);
  }


}
