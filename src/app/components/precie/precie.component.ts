import { Component, OnInit } from '@angular/core';
import { Tabla } from '../../interfaces/index'

@Component({
  selector: 'app-precie',
  templateUrl: './precie.component.html',
  styleUrls: ['./precie.component.css']
})
export class PrecieComponent implements OnInit {

  tabla_1: Tabla;
  tabla_2: Tabla;
  tabla_3: Tabla;
  tablas: Tabla[] = [];

  constructor() { 
    this.tabla_1 = {
      plan: "Standar",
      precio: '50,30' ,
      atributos: [
        'caracteristica 1',
        'caracteristica 2',
        'caracteristica 3',
        'caracteristica 4',
        'caracteristica 5',
      ]
    }
    this.tabla_2 = {
      plan: "Básico",
      precio: '29,99' ,
      atributos: [
        'caracteristica 1',
        'caracteristica 2',
        'caracteristica 3',
        'caracteristica 4',
        'caracteristica 5',
      ]
    }
    this.tabla_3 = {
      plan: "Premium",
      precio: '50,30' ,
      atributos: [
        'caracteristica 1',
        'caracteristica 2',
        'caracteristica 3',
        'caracteristica 4',
        'caracteristica 5',
      ]
    }
    this.tablas.push(this.tabla_1)
    this.tablas.push(this.tabla_2)
    this.tablas.push(this.tabla_3)
  }

  ngOnInit(): void {
  }

}
