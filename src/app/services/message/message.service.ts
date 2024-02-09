import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  /* Se crea una variable, para poder manejar todos los mensajes que se almacenen en ella
   * con el objetivo de poder, crear, consultar, actualizar y eliminar la información dentro de ella 
  */
  mensaje: string[] = [];

  crearMensaje(localMensaje: string) {
    this.mensaje.push(localMensaje);
  }
}
