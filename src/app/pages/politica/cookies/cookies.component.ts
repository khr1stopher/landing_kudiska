import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.css']
})
export class CookiesComponent implements OnInit {

  app_name = "LanzaApp"
  link_landing = environment.link
  mail = "admin@kudiska.com"

  constructor() { }

  ngOnInit(): void {
  }

}
