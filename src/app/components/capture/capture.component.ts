import { Component, OnInit } from '@angular/core';
import {app_name} from '../../shared/config/config'

@Component({
  selector: 'app-capture',
  templateUrl: './capture.component.html',
  styleUrls: ['./capture.component.css']
})
export class CaptureComponent implements OnInit {

  lista: Number[] = [1,2,3];
  app_name = app_name

  constructor() { }

  ngOnInit(): void {
  }

}
