import {Component, Input, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {Book} from "../../../books/book.model";
import {BooksService} from "../../../books/books.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-wislist-item',
  templateUrl: './wislist-item.component.html',
  styleUrls: ['./wislist-item.component.scss']
})
export class WislistItemComponent implements OnInit, OnDestroy {
  // @Input() wishlist: Book;
  subscription: Subscription;
  editingMode = false;
  selectedBookIndex: number;

  constructor(private bookService: BooksService) {
  }

  ngOnInit(): void {
    this.subscription = this.bookService.bookSelected.subscribe(
      (index: number) => {
        this.selectedBookIndex = index;
        this.editingMode = true;

      }
    )
  }


 // onMarkAsOwned() {
    // this.bookService.bookSelected.subscribe(
    //   (index: number) => {
    //     this.selectedBookIndex = index;
    //   }
    // )
    // console.log('uruchomoione' + this.selectedBookIndex);
    //console.log(this.selectedBookIndex);
    //this.bookService.delete(this.selectedBookIndex);
//
//     console.log(this.selectedBookIndex);
//     this.bookService.delete(this.selectedBookIndex);
//   }
//

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
