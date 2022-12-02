import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-multi-checkbox',
  templateUrl: './multi-checkbox.component.html',
  styleUrls: ['./multi-checkbox.component.scss']
})
export class MultiCheckboxComponent implements OnInit {
  categoriesForm: FormGroup;

  Data: Array<any> = [
    {
      name: "naukowe",
      value: 'naukowe',
    },
    {
      name: "thriller",
      value: 'naukowe',
    },
    {
      name: "fantastyka",
      value: 'naukowe',
    },
    {
      name: "piękna",
      value: 'naukowe',
    }
  ]

  constructor(private formBuilder: FormBuilder) {
    this.categoriesForm = this.formBuilder.group({
      checkArray: this.formBuilder.array([], Validators.required)
    })
  }

  ngOnInit(): void {
  }

  onCheckboxChange(e: any) {
    const checkArray: FormArray = this.categoriesForm.get('checkArray') as FormArray;
    if(e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach(item => {
        if(item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      })
    }
  }

  onSubmit() {
    console.log(this.categoriesForm);
    console.log(this.categoriesForm.value);
  }

}
