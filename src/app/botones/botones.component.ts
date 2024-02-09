import { Component } from '@angular/core';

@Component({
  selector: 'app-botones',
  standalone: true,
  imports: [],
  templateUrl: './botones.component.html',
  styleUrl: './botones.component.css'
})
export class BotonesComponent {
  text_color: string = "";
  
  cambiarTextDeColor(e:string) {
    switch (e) {
      case '1':
        this.text_color = "text-primary";
        break;
      case '2':
        this.text_color = "text-danger";
        break;
      case '3':
        this.text_color = "text-success";
        break;
      default:
        this.text_color = "text-success";
        break;
    }
  }
}
