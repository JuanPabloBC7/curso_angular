import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-form-tamplate',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ng-form-tamplate.component.html',
  styleUrl: './ng-form-tamplate.component.css'
})
export class NgFormTamplateComponent {
  persona = {
    nombre: '',
    edad: ''
  }

  alumno = {
    nombreAlumno: '',
    edadAlumno: ''
  }

  enviar() {
    console.log(this.persona)
  }

  enviarAlumno() {
    console.log(this.persona)
  }
}
