import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  @Input() msg: String;

  constructor() { }

  ngOnInit(): void {
    // document.body.style.background = "#000"
  }

  quit(){
    document.getElementById('contacto').style.display = "none"
  }

}
