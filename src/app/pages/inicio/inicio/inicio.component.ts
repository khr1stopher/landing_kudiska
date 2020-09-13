import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbTimepickerConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { config } from 'rxjs';
import { User } from 'src/app/interfaces';
import { UserService } from '../../../services/services.index';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  providers: []
})
export class InicioComponent implements OnInit {

  constructor(
    private user: UserService
  ) { 
  }

  ngOnInit(): void {

  }
}