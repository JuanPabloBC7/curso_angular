import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

import { ContadorComponent } from './contador/contador.component';
import { BotonesComponent } from './botones/botones.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgFormTamplateComponent } from './ng-form-tamplate/ng-form-tamplate.component';
import { NgFormReactiveComponent } from './ng-form-reactive/ng-form-reactive.component';
import { NgComponentInputComponent } from './ng-component-input/ng-component-input.component';
import { NgComponentOutputComponent } from './ng-component-output/ng-component-output.component';
import { NgServicesComponent } from './ng-services/ng-services.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ContadorComponent,
    BotonesComponent,
    NgIfComponent,
    NgForComponent,
    NgSwitchComponent,
    NgFormTamplateComponent,
    NgFormReactiveComponent,
    NgComponentInputComponent,
    NgComponentOutputComponent,
    NgServicesComponent,
    RouterModule 
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'curso_angular';
}
