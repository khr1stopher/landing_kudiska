import { Component, OnInit, HostListener } from '@angular/core';
import {app_name} from '../../shared/config/config'

@Component({
  selector: 'app-face-page',
  templateUrl: './face-page.component.html',
  styleUrls: ['./face-page.component.css']
})
export class FacePageComponent implements OnInit {

  app_name = app_name

  constructor() { 
    
  }

  ngOnInit(): void {
  }

  imprimir(event){
    console.log(event);
    
  }

  @HostListener("scroll", ['$event'])
  doSomethingOnInternalScroll($event:Event){
    let scrollOffset = $event;
    console.log("scroll: ", scrollOffset);
  }
}
