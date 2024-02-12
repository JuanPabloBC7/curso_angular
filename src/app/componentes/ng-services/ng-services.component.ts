import { Component } from '@angular/core';
import { AddMessageComponent } from './add-message/add-message.component';
import { ListMessageComponent } from './list-message/list-message.component';

@Component({
  selector: 'app-ng-services',
  standalone: true,
  imports: [
    AddMessageComponent,
    ListMessageComponent,
  ],
  templateUrl: './ng-services.component.html',
  styleUrl: './ng-services.component.css'
})
export class NgServicesComponent {

}
