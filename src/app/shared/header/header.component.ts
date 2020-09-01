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

}
