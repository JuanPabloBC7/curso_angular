import { Component, Input } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-component-output',
  standalone: true,
  imports: [ChildComponent, FormsModule],
  templateUrl: './ng-component-output.component.html',
  styleUrl: './ng-component-output.component.css'
})
export class NgComponentOutputComponent {
  texto = 'TEXTO 1: Este texto esta en el padre.';
}
