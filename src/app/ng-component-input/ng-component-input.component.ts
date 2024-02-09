import { Component } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-component-input',
  standalone: true,
  imports: [ChildComponent, FormsModule],
  templateUrl: './ng-component-input.component.html',
  styleUrl: './ng-component-input.component.css'
})
export class NgComponentInputComponent {
  ciTexto1 = 'TEXTO 1: Este texto esta en el padre.';
}
