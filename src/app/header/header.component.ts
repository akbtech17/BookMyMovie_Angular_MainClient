import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerStore } from '../CustomerStore';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  customerEmail = ''
  customerFirstName = ''

  constructor(private router: Router) { }

  ngOnInit() {
    this.customerEmail = CustomerStore.email
    this.customerFirstName = CustomerStore.firstName
  }


  OnLogout() {
    alert(`Logging Out ${CustomerStore.firstName}`);
    CustomerStore.email = '';
    CustomerStore.firstName = '';
    this.customerEmail='';
    
    this.router.navigate(["/movies-list"]);
  }
}
