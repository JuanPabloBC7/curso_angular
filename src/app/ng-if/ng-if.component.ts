import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-ng-if',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './ng-if.component.html',
  styleUrl: './ng-if.component.css'
})
export class NgIfComponent {
  showAlert: boolean = false;
  myName: string = "";

  showName(e: string) {
    // console.log(this.showAlert)
    if (this.showAlert == true) {
      this.showAlert = false
    } else {
      this.showAlert = true
    }
    this.myName = e;
  }
}
