import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  User: User;

  constructor() { 
    this.User = JSON.parse(sessionStorage.getItem('user'));
  }

  ngOnInit(): void {

  }

}
