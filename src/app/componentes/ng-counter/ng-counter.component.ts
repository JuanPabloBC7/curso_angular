import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-counter',
  standalone: true,
  imports: [],
  templateUrl: './ng-counter.component.html',
  styleUrl: './ng-counter.component.css'
})
export class NgCounterComponent {
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
