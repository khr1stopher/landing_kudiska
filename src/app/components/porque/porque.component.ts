import { Component, OnInit } from '@angular/core';
import {app_name} from '../../shared/config/config'

@Component({
  selector: 'app-porque',
  templateUrl: './porque.component.html',
  styleUrls: ['./porque.component.css']
})
export class PorqueComponent implements OnInit {

  app_name = app_name

  constructor() { }

  ngOnInit(): void {
  }

}
