import { Component } from '@angular/core';
import { NgButtonComponent } from './ng-button/ng-button.component';
import { NgCounterComponent } from './ng-counter/ng-counter.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgFormTamplateComponent } from './ng-form-tamplate/ng-form-tamplate.component';
import { NgFormReactiveComponent } from './ng-form-reactive/ng-form-reactive.component';
import { NgComponentInputComponent } from './ng-component-input/ng-component-input.component';
import { NgComponentOutputComponent } from './ng-component-output/ng-component-output.component';
import { NgServicesComponent } from './ng-services/ng-services.component';

@Component({
  selector: 'app-componentes',
  standalone: true,
  imports: [
    NgButtonComponent,
    NgCounterComponent,
    NgIfComponent,
    NgForComponent,
    NgSwitchComponent,
    NgFormTamplateComponent,
    NgFormReactiveComponent,
    NgComponentInputComponent,
    NgComponentOutputComponent,
    NgServicesComponent
  ],
  templateUrl: './componentes.component.html',
  styleUrl: './componentes.component.css'
})
export class ComponentesComponent {

}
