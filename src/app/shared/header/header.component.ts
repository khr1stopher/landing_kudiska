import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  contacto_activo: boolean

  constructor(
  ) { 
    this.contacto_activo = false
   }

  ngOnInit(): void {
  }

  contacto() {
    if ( !this.contacto_activo ){
      document.getElementById('contacto').style.display = "inherit"
    } else if (this.contacto_activo) { 
      this.contacto_activo = false
      document.getElementById('contacto').style.display = "none"
    } else {
      this.contacto_activo = true
      document.getElementById('contacto').style.display = "none"
    } 
  }

  cambia_head(){
    var element = document.querySelector('nav')
    element.classList.toggle("Sticky", window.scrollY > 100)
  }

  ir_caracteristica(){
    document.querySelector("body > app-root > app-pages > div > app-inicio > app-caracteristicas > div").scrollIntoView({ block: 'end',  behavior: 'smooth' })
  }

  ir_captures(){
    document.querySelector("body > app-root > app-pages > div > app-inicio > app-capture > div").scrollIntoView({ block: 'end',  behavior: 'smooth' })
  }

  ir_precio(){
    document.querySelector("body > app-root > app-pages > div > app-inicio > app-precie > div").scrollIntoView({ block: 'end',  behavior: 'smooth' })
  }
  
  ir_contacto(){
    document.querySelector("#contacto").scrollIntoView({ block: 'end',  behavior: 'smooth' })
  }

  ir_top(){
    window.scrollTo({top:0,behavior: 'smooth'})
  }

  kudiska(){
    window.location.assign(window.location.host.toString())
    console.log('apso');
    
  }
  
}
