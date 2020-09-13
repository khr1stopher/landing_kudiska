import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces';
import { UserService } from 'src/app/services/services.index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  forma: FormGroup;
  User: User = {} as any;

  constructor(
    private fb: FormBuilder,
    private servicio_user: UserService,
    private router: Router
  ) { 
    this.forma = this.fb.group({
      correo: [null, Validators.required],
      password: [null, Validators.required],
      recuerdame: [null, Validators.required]
    });
  }

  ngOnInit(): void {
  }

  getValues(){
    this.User = {
      id: null,
      firstname: null,
      lastname: null,
      years_old: null,
      email: this.getCorreo.value,
      phone: null,
      password: this.getpassword.value
    }
    console.log(this.User)
  }

  get getCorreo() { return this.forma.get('correo'); }
  get getpassword() { return this.forma.get('password'); }

  iniciar_sesion(){
    this.getValues()
    this.servicio_user.getUser(this.User.email,this.User.password).subscribe(
      data => {
        sessionStorage.setItem('user', JSON.stringify(data))
        this.router.navigate(['/panel']);
        // this.spinnerService.hide();
      },
        error => {
          if(error.status == 500 || error.status == 400){
            alert('ocurrio un error');
          }
        }
    );
  }
}
