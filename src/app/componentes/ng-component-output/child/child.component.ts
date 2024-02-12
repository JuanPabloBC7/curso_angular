import { Component,  Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() texto?: string;
  @Output() textoChange = new EventEmitter<string>();

  emitTextoChange(){
    this.textoChange.emit(this.texto);
  }
}
