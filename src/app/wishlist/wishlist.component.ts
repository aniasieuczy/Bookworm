import { Component, OnInit } from '@angular/core';
import {Book} from "../books/book.model";
import {BooksService} from "../books/books.service";

@Component({
  selector: 'app-wishlist',
  templateUrl: 'wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  wishlist: Book [];

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.wishlist = this.booksService.getWishlist();
    this.booksService.wishlistChanged.subscribe(
      (newWishList: Book[]) => {
        this.wishlist = newWishList;
      }
    )
  }

  onItemClick (index: number) {
    this.booksService.bookSelected.next(index);
    console.log(index);
  }

}
