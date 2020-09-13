import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbTimepickerConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { config } from 'rxjs';
import { User } from 'src/app/interfaces';
import { UserService } from '../../../services/services.index';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  password;

  forma: FormGroup;
  User: User = {} as any;
  constructor(
    private servicio_user: UserService,
    private fb: FormBuilder,
    private config: NgbTimepickerConfig,
    private spinnerService: NgxSpinnerService,
    private router: ActivatedRoute,
    private route:ActivatedRoute,
  ) { 
    config.spinners = false;
    
    this.forma = this.fb.group({
      firstname: [null, Validators.required],
      lastname: [null, Validators.required],
      email: [null, Validators.required],
      years_old: [null, Validators.required],
      phone: [null, Validators.required],
      password: [null, Validators.required],
      re_password: [null, Validators.required]
    });

    
  }

  ngOnInit(): void {
    // this.servicio_user.getUsers().subscribe(data => {
    //   console.log(data)
    // });
    
  }

  // handleError = (err) => Swal.fire(swalError('Ha ocurrido un error', err.userMessage));

  get getfirstname() { return this.forma.get('firstname'); }
  get getlastname() { return this.forma.get('lastname'); }
  get getEmail() { return this.forma.get('email'); }
  get getEdad() { return this.forma.get('years_old'); }
  get getPhone() { return this.forma.get('phone'); }
  get getPass() { return this.forma.get('password'); }
  get get_Pass() { return this.forma.get('re_password'); }

  getValues(){
    if(this.getPass.value == this.get_Pass.value){
      this.password = this.getPass.value
    }
    this.User = {
      id: null,
      firstname: this.getfirstname.value,
      lastname: this.getlastname.value,
      years_old: this.getEdad.value,
      email: this.getEmail.value,
      phone: this.getPhone.value,
      password: this.getPass.value
    }
    // console.log(this.User)
  }
  
  register_user(){
    this.getValues();
    this.servicio_user.postUser(this.User).subscribe(
      data => {
        // this.spinnerService.hide();
      },
        error => {
          if(error.status == 500 || error.status == 400){
            alert('ocurrio un error');
          }
        }
    )
  }

}
