import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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

  constructor(private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
  }
  OnLogoClick() {
    this.router.navigate(["/"]);
  }
  OnLogout() {
    this.toastr.success('You have been logged out!', 'Success', {
      timeOut: 3000,
    });
    CustomerStore.email = '';
    CustomerStore.firstName = '';
    this.customerEmail='';
    this.router.navigate(["/"]);
  }
}
