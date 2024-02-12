import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cursos-detail',
  standalone: true,
  imports: [],
  templateUrl: './cursos-detail.component.html',
  styleUrl: './cursos-detail.component.css'
})
export class CursosDetailComponent {
  id: number = 0;
  miCurso?: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(eParams => {
      this.id = eParams['id']
      this.miCurso = eParams['curso']
    })
  }
}
