import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminStore } from '../AdminStore';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {
  adminEmail = AdminStore.email
  adminFirstName = AdminStore.firstName

  ngOnInit() {
  }
  OnLogoClick() {
    this.router.navigate(["/"]);
  }
  constructor(private router: Router, private toastr: ToastrService) { }

  OnLogout() {
    this.toastr.success('You have been logged out!', 'Success', {
      timeOut: 3000,
    });
    AdminStore.email = '';
    AdminStore.firstName = '';
    this.adminEmail='';
    this.router.navigate(["/admin/signin"]);
  }
}
