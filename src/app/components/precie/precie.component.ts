import { Component, OnInit } from '@angular/core';
import { Tabla } from '../../interfaces/index'

@Component({
  selector: 'app-precie',
  templateUrl: './precie.component.html',
  styleUrls: ['./precie.component.css']
})
export class PrecieComponent implements OnInit {
  name = 'hola';
  tabla_1: Tabla;
  tabla_2: Tabla;
  tabla_3: Tabla;
  tablas: Tabla[] = [];

  constructor() { 
    this.tabla_1 = {
      plan: "Estandar",
      precio: '50,30' ,
      atributos: [
        'Podrás crear hasta 5 diseños',
        'Podrás publicar 2 diseños públicos',
        'Podrás publicar 1 diseño privado',
        '30 días de exposición en tus diseños. ',
        'Sin accesoria'
      ]
    }
    this.tabla_2 = {
      plan: "Pymes",
      precio: '29,99' ,
      atributos: [
        'Podrás crear hasta 5 diseños',
        'Podrás publicar 5 diseños públicos',
        'Podrás publicar 3 diseño privado',
        '60 días de exposición en tus diseños. ',
        'Sin accesoria'
      ]
    }
    this.tabla_3 = {
      plan: "Premium",
      precio: '50,30' ,
      atributos: [
        'Podrás crear hasta 10 diseños',
        'Podrás publicar 10 diseños públicos',
        'Podrás publicar 5 diseño privado',
        '90 días de exposición en tus diseños. ',
        'Tendrás accesoria profesional '
      ]
    }
    this.tablas.push(this.tabla_1)
    this.tablas.push(this.tabla_2)
    this.tablas.push(this.tabla_3)
  }

  ngOnInit(): void {
  }

}