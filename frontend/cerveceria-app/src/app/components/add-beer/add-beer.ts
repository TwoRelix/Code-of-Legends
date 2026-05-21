import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-add-beer',
  imports: [ReactiveFormsModule],
  templateUrl: './add-beer.html',
  styleUrl: './add-beer.css',
})
export class AddBeer {
  private fb = inject(FormBuilder);

  beerForm = this.fb.group({
    name: ['', Validators.required],
    brand: ['', Validators.required],
    type: ['', Validators.required],
    alcohol: [0, [Validators.required, Validators.min(0.1)]],
    description: ['']
  });

  onSubmit() {

    if (this.beerForm.invalid) {
      this.beerForm.markAllAsTouched();
      return;
    }

    console.log(this.beerForm.value);

    this.beerForm.reset();
  }
}
