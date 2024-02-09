import { Component } from '@angular/core';
import { MessageService } from '../../services/message/message.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-message.component.html',
  styleUrl: './list-message.component.css'
})
export class ListMessageComponent {
  constructor (public messageServices: MessageService) { }

  mensaje: string = '';

  crearNuevoMensaje() {
    this.messageServices.crearMensaje(this.mensaje);
    this.mensaje = '';
  }
}
