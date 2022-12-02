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
  signupForm: FormGroup;
  form: FormGroup;

  Data: Array<any> = [
    {
      name: "naukowe",
      value: 'naukowe',
    },
    {
      name: "thriller",
      value: "thriller",
    },
    {
      name: "fantastyka",
      value:"fantastyka",
    },
    {
      name: "piękna",
      value: "piękna",
    }
  ]

  constructor(private bookService: BooksService) {
  }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'title': new FormControl(null, Validators.required),
      'author': new FormControl(null, Validators.required),
      'img': new FormControl('https://cdn.shopify.com/s/files/1/0281/0825/9431/products/040617__42339_1024x1024.jpg?v=1587047887'),
      'category': new FormArray([]),
      'wishlist': new FormControl(''),
    });

  }

  onCheckboxChange(e: any) {
    const category: FormArray = this.signupForm.get('category') as FormArray;
    if(e.target.checked) {
      category.push(new FormControl(e.target.value));
    } else {
      let i = 0;
      category.controls.forEach(item => {
        if(item.value == e.target.value) {
          category.removeAt(i);
          return;
        }
        i++;
      })
    }
  }

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
      console.log(this.signupForm.value);
      this.signupForm.reset();
    }
    console.log(this.bookService.getBooks());

  }

}


