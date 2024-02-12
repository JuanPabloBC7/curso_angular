import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";

import { Persona } from '../../persona';

@Component({
  selector: 'app-ng-for',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {
  personas: Persona[] = [
    { nombre: "Juan", edad: 27 },
    { nombre: "Jose", edad: 26 },
    { nombre: "María", edad: 23 },
    { nombre: "Luis", edad: 30 }
  ]
}
