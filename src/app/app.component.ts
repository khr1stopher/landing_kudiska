import { Component } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'landing';
  constructor(private spinner: NgxSpinnerService){
  }
  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();
 
    setTimeout(() => {
      this.spinner.hide();
    }, 5000);
  }
}
