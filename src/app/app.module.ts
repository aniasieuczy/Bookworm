import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookItemComponent } from './books/book-list/book-item/book-item.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { HeaderComponent } from './header/header.component';
import {ReactiveFormsModule} from "@angular/forms";
import { WislistItemComponent } from './wishlist/wishlist-list/wislist-item/wislist-item.component';
import { MultiCheckboxComponent } from './books/multi-checkbox/multi-checkbox.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookListComponent,
    BookItemComponent,
    WishlistComponent,
    HeaderComponent,
    WislistItemComponent,
    MultiCheckboxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
