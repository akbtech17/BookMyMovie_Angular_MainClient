import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { CustomerStore } from '../CustomerStore';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  customerEmail = CustomerStore.email
  customerFirstName = CustomerStore.firstName

  constructor(private router: Router) { }

  ngOnInit() {
  }
  OnLogoClick() {
    this.router.navigate(["/"]);
  }
  OnLogout() {
    alert(`Logging Out ${CustomerStore.firstName}`);
    CustomerStore.email = '';
    CustomerStore.firstName = '';
    this.customerEmail='';
    
    this.router.navigate(["/"]);
  }
}
