import { Component, OnInit, Input} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Correo } from 'src/app/interfaces';
import { UserService } from 'src/app/services/services.index';
import { NgbTimepickerConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { config } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  @Input() msg: String;

  correo: Correo = {} as any;
  password;

  val1;
  val2;
  val3;
  val4;

  forma: FormGroup;

  constructor(private servicio_user: UserService,
    private fb: FormBuilder,) { 
    this.forma = this.fb.group({
      nombre: [null, Validators.required],
      lastname: [null, Validators.required],
      email: [null, Validators.required],
      years_old: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    // document.body.style.background = "#000"
  }

  quit(){
    document.getElementById('contacto').style.display = "none"
  }

  enviar_correo(){
    this.correo = {
      nombre: document.querySelector("#firstname").value,
      apellido: document.querySelector("#lastname").value,
      Correo: document.querySelector("#Correo").value,
      msg: document.querySelector("#mensaje").value
    }

    this.val1 = document.querySelector("#firstname").value
    
    console.log(document.querySelector("#firstname").value)
    console.log(document.querySelector("#lastname").value)
    console.log(document.querySelector("#Correo").value)
    console.log(document.querySelector("#mensaje").value)
    this.servicio_user.enviar_correo(this.correo).subscribe(
      data => {
        console.log(data);
      })
      alert('CORREO ENVIADO')
  }

}
