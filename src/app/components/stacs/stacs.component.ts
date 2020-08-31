import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stacs',
  templateUrl: './stacs.component.html',
  styleUrls: ['./stacs.component.css']
})
export class StacsComponent implements OnInit {

  stack: String[];
  value: Number[];

  constructor() { 
    this.stack = ['Descargas','Usuarios Activos','Diseños','Diseños Compartidos']
    this.value = [1000,700,3536,725]
  }
  ngOnInit(): void {
  }

}
