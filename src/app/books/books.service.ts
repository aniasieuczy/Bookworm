import { Book } from "./book.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Subject} from "rxjs";

@Injectable({providedIn: "root"})
export class BooksService {
  bookSelected = new EventEmitter<Book>();
  booksChanged = new Subject<Book[]>();

    private books: Book [] = [
    new Book(
      'Nakręcana dziewczyna. Pompa numer sześć',
      'https://ecsmedia.pl/c/nakrecana-dziewczyna-pompa-numer-szesc-b-iext121707298.jpg',
      'Bacigalupi Paolo'),
    new Book(
      'Wy wszyscy moi ja',
      'https://s.lubimyczytac.pl/upload/books/309000/309231/754449-352x500.jpg',
      'Brzeziński Miłosz'),
    new Book (
      'Mężczyzna który pomylił swoją żonę z kapeluszem',
      'https://upolujebooka.pl/_data_cache/_data/offer/013/190_290_0_0_0_1_127416-mezczyzna__ktory_pomylil_swoja_zone_z_kapeluszem.jpg',
      'Sacks Olivier')
  ];

    private wishlist: Book [] = [

    ]

  getBooks() {
    return this.books.slice();
  }

  addNewBooks(book: Book){
        this.books.push(book);
        this.booksChanged.next(this.books.slice());
  }

  addToWishlist(book: Book) {
      this.wishlist.push(book);
  }

  getWishlist() {
      return this.wishlist.slice();
  }



}
