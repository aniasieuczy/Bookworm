import {Component, EventEmitter, OnInit} from '@angular/core';
import {Book} from "./book.model";
import {BooksService} from "./books.service";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import * as events from "events";

interface ICategories {
  label: string;
  value: string;
  checked: boolean;
}

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  selectedBook: Book;
  signupForm: FormGroup;
  form: FormGroup;

  // checkboxes = [
  //   {
  //     id: 1,
  //     name: "naukowe",
  //     value: 'naukowe',
  //     selected: false
  //   },
  //   {
  //     id: 2,
  //     name: "thriller",
  //     value: 'naukowe',
  //     selected: false
  //   },
  //   {
  //     id: 3,
  //     name: "fantastyka",
  //     value: 'naukowe',
  //     selected: false
  //   },
  //   {
  //     id: 4,
  //     name: "piękna",
  //     value: 'naukowe',
  //     selected: false
  //   }
  // ]

  constructor(private bookService: BooksService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'title': new FormControl(null, Validators.required),
      'author': new FormControl(null, Validators.required),
      'img': new FormControl('https://cdn.shopify.com/s/files/1/0281/0825/9431/products/040617__42339_1024x1024.jpg?v=1587047887'),
      'category': new FormControl(null, Validators.required),
      'wishlist': new FormControl(''),
    });
    // this.form.formBuilder.group({
    //   checkboxes: this.buildCheckboxes()
    // })
  }

// buildCheckboxes () {
//     const arr = this.checkboxes.map(box => {
//       return this.formBuilder.control(box.selected)
//     })
//   return this.formBuilder.array(arr);
// }

  onSubmit() {
    const newBook = new Book(
      this.signupForm.value['title'],
      this.signupForm.value['img'],
      this.signupForm.value['author'],
      this.signupForm.value['category'],
      this.signupForm.value['wishlist'],
    );

    if (this.signupForm.value['wishlist'] === true) {
      this.bookService.addToWishlist(newBook);
      console.log(this.bookService.getWishlist());
      this.signupForm.reset();
    } else {
      this.bookService.addNewBooks(newBook);
      this.signupForm.reset();
    }
    console.log(this.bookService.getBooks());
  }

}


