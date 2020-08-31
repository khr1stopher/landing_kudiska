import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-capture',
  templateUrl: './capture.component.html',
  styleUrls: ['./capture.component.css']
})
export class CaptureComponent implements OnInit {

  lista: Number[] = [1,2,3];

  constructor() { }

  ngOnInit(): void {
  }

}
