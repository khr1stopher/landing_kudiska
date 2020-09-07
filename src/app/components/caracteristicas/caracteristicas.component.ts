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
      'Kudiska de están a la vanguardia de los diseños actuales por ellos los que hagas con nosotros podrán tener la misma calidad que con diseñador profesional',
      'Solo necesitas seguir las instrucciones que te damos y rápidamente tendrás ese diseño que tantas esperas, y no necesitas recurrir a cumplidas técnicas para expresar lo que deseas',
      'Al ser organizado y minimalista lo diseños se crean en un promedio de 5 minutos'
    ]
   }

  ngOnInit(): void {
  }

}
