import {Component, OnDestroy, OnInit} from '@angular/core';
import {Book} from "../books/book.model";
import {BooksService} from "../books/books.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-wishlist',
  templateUrl: 'wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit, OnDestroy {
  wishlist: Book [];
  subs: Subscription;

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.wishlist = this.booksService.getWishlist();
    this.subs = this.booksService.wishlistChanged.subscribe(
      (newWishList: Book[]) => {
        this.wishlist = newWishList;
      }
    )
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }


}
