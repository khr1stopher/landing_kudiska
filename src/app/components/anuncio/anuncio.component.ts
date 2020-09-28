import { Component, OnInit } from '@angular/core';
import {app_name} from '../../shared/config/config'

@Component({
  selector: 'app-anuncio',
  templateUrl: './anuncio.component.html',
  styleUrls: ['./anuncio.component.css']
})
export class AnuncioComponent implements OnInit {

  app_name = app_name;

  constructor() { }

  ngOnInit(): void {
  }

}
