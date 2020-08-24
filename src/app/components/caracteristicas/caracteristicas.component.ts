import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caracteristicas',
  templateUrl: './caracteristicas.component.html',
  styleUrls: ['./caracteristicas.component.css']
})
export class CaracteristicasComponent implements OnInit {

  caracteristicas: String[];
  descripciones: String[];
  size_icon: number;

  constructor() {
    this.caracteristicas = [
      'Diseño Profesional',
      'Sin Experiencia en Diseño',
      'Diseño en 5 Minutos!'
    ];
    this.size_icon = 2
    this.descripciones = [
      'Los Diseños en kudiska pueden competir con los de un diseñador UI',
      'No es necesario Tener conosimientos previos para crear buenos Templates',
      'Al ser Organizado y minimalista lo Diseños se crean en un promedio de 5 minutos'
    ]
   }

  ngOnInit(): void {
  }

}
