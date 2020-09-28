import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment'
@Component({
  selector: 'app-privacidad',
  templateUrl: './privacidad.component.html',
  styleUrls: ['./privacidad.component.css']
})
export class PrivacidadComponent implements OnInit {

  app_name = "LanzaApp"
  link_landing = environment.link
  mail = "admin@kudiska.com"

  constructor() { }

  ngOnInit(): void {
  }

}
