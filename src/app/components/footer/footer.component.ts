import { Component, OnInit } from '@angular/core';
import {app_name} from '../../shared/config/config'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  app_name = app_name

  constructor() { }

  ngOnInit(): void {
  }

  privacidad(){
    window.location.assign(`http://${window.location.host.toString()}/#/politica/privacidad`);
  }
  terminos(){
    window.location.assign(`http://${window.location.host.toString()}/#/politica/terminos`);
  }
  cookies(){
    window.location.assign(`http://${window.location.host.toString()}/#/politica/cookies`);
  }

}
