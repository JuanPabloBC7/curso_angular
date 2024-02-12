import { Component } from '@angular/core';
import { ComponentesComponent } from '../../componentes.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ComponentesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
