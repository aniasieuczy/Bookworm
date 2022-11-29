import {Component, Input, OnInit} from '@angular/core';
import {Book} from "../book.model";

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  @Input() book: Book = {title: 'test', author: "Why does it demand to initialize it", imagePath: "test", category: "test"};

  constructor() { }

  ngOnInit(): void {
  }

}
