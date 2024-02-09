import { Component } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent {
  constructor() {}

  ngOnInit(): void{
  }

  numero: number = 1;

  sumarORestar(e:string) {
    switch (e) {
      case '+':
        this.numero += 1;
        break;
      case '-':
        this.numero -= 1;
        break;
      default:
        break;
    }
  }
}
