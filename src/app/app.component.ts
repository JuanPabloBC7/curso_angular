import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

import { NgFormTamplateComponent } from './componentes/ng-form-tamplate/ng-form-tamplate.component';
import { NgFormReactiveComponent } from './componentes/ng-form-reactive/ng-form-reactive.component';
import { NgServicesComponent } from './componentes/ng-services/ng-services.component';
import { ComponentesComponent } from './componentes/componentes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgFormTamplateComponent,
    NgFormReactiveComponent,
    NgServicesComponent,
    RouterModule,
    ComponentesComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'curso_angular';
}
