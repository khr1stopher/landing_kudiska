import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../shared/shared.module';
import { environment } from '../shared/config/url';
import { Correo, User } from '../interfaces';
// import { Observable } from 'rxjs';
const Url = `${environment.baseUrl}/api/User`;
const Mail = `${environment.baseUrl}/api/Mail`;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public Users: User[];
  public User: User;

  constructor(
    private http: HttpClient
  ) {
   }

   getUsers = () => this.http.get(`${Url}`);
   getUser = (mail: String, pass: String) => this.http.get(`${Url}/LanzaApp/?pass=${pass}&correo=${mail}`);
   postUser = (data: User) => this.http.post(`${Url}/?firstname=${data.firstname}&lastname=${data.lastname}&email=${data.email}&years_old=${data.years_old}&phone=${data.phone}&password=${data.password}`, null);
   enviar_correo = (data: Correo) => this.http.post(`${Mail}/?name=${data.nombre}&name_2=${data.apellido}&mail=${data.Correo}&msg=${data.msg}`, null)
}
