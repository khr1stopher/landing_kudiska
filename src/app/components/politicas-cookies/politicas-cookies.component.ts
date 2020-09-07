import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-politicas-cookies',
  templateUrl: './politicas-cookies.component.html',
  styleUrls: ['./politicas-cookies.component.css']
})
export class PoliticasCookiesComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }

  desctivar(){
    document.querySelector(".poli_cook").innerHTML = ""
    document.querySelector(".poli_cook").classList.remove('p-3')

  }

}
