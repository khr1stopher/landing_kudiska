import { Component, OnInit } from '@angular/core';
import {app_name} from '../../../shared/config/config'

@Component({
  selector: 'app-terminos',
  templateUrl: './terminos.component.html',
  styleUrls: ['./terminos.component.css']
})
export class TerminosComponent implements OnInit {

  app_name = app_name

  constructor() { }

  ngOnInit(): void {
  }

}
