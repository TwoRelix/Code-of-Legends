import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-beer',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-beer.html',
  styleUrl: './add-beer.css',
})
export class AddBeer {

  private fb = inject(FormBuilder);
  private http = inject(HttpClient);

  beerForm = this.fb.group({
    nombre: ['', Validators.required],
    estilo: ['', Validators.required],
    graduacionAlcoholemica: [0, [Validators.required, Validators.min(0)]],
    descripcion: [''],
    cerveceriaId: [null, Validators.required]
  });

  isLoading = false;
  successMessage = '';
  errorMessage = '';

  onSubmit() {

    if (this.beerForm.invalid) {
      this.beerForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;
    this.successMessage = '';
    this.errorMessage = '';

    const formValue = this.beerForm.value;

    const payload = {
      nombre: formValue.nombre,
      estilo: formValue.estilo,
      graduacionAlcoholemica: formValue.graduacionAlcoholemica,
      descripcion: formValue.descripcion,
      cerveceriaId: formValue.cerveceriaId
    };

    this.http.post('http://localhost:8080/api/beers', payload)
      .subscribe({
        next: () => {
          this.successMessage = '🍺 Cerveza añadida correctamente';
          this.beerForm.reset();
          this.isLoading = false;
        },
        error: (err) => {
          console.error(err);
          this.errorMessage = '❌ Error al crear la cerveza';
          this.isLoading = false;
        }
      });
  }
}
