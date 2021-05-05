import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  form: FormGroup;

  categories = [
    { id: 1, name: 'Foods' },
    { id: 2, name: 'Drinks' },
    { id: 3, name: 'Snaps' },
  ];

  constructor(private builder: FormBuilder) {
    this.form = builder.group({
      name: ['', [Validators.required, Validators.maxLength(30)]],
      category: ['', Validators.required],
      price: 0,

      size: builder.group({
        us: 0,
        uk: 0,
      }),
      color: builder.array([]),
      properties: builder.array([]),
    });

    this.addColor();
    this.addProperties();
  }

  ngOnInit(): void {}

  get color(): FormArray {
    return this.form.get('color') as FormArray;
  }

  addColor() {
    this.color.push(this.builder.control('', Validators.required));
  }

  removeColor(index: number) {
    this.color.removeAt(index);
    if (!this.color.length) {
      this.addColor();
    }
  }

  get properties(): FormArray {
    return this.form.get('properties') as FormArray;
  }

  addProperties() {
    this.properties.push(this.builder.control('', Validators.required));
  }
  removeProperties(index: number) {
    this.properties.removeAt(index);
    if (!this.properties.length) {
      this.addProperties();
    }
  }
  showError(name: string) {
    return (
      this.form.get(name)?.invalid &&
      (this.form.get(name)?.touched || this.form.get(name)?.dirty)
    );
  }
}
