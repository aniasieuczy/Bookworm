import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BooksComponent} from "./books/books.component";
import {WishlistComponent} from "./wishlist/wishlist.component";
import {HeaderComponent} from "./header/header.component";

const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: "full" },
  { path: 'books', component: BooksComponent },
  { path: 'wishlist', component: WishlistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
