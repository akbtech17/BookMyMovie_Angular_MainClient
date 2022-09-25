import { Component, OnInit } from '@angular/core';
import { CustomerStore } from './CustomerStore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'BookMyMovie_Angular_Client';
  customerEmail = ''

  ngOnInit() {
    console.log("Initing App")
    this.customerEmail = CustomerStore.email
  }

  OnChanges() {
    console.log("Initing App")
    this.customerEmail = CustomerStore.email
  }
}
