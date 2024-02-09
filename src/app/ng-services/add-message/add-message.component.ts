import { Component } from '@angular/core';
import { MessageService } from '../../services/message/message.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-message',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-message.component.html',
  styleUrl: './add-message.component.css'
})
export class AddMessageComponent {
  constructor (public messageServices: MessageService) { }

  mensaje: string = '';

  crearNuevoMensaje() {
    this.messageServices.crearMensaje(this.mensaje);
    this.mensaje = '';
  }
}
