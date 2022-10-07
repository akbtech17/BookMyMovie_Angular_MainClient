import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from '../customer.service';
import { ICustomer } from '../icustomer';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  customerDetails: ICustomer = {
    customerId: 0,
    firstName: "",
    email: "",
    password: ""
  };
  constructor(private router: Router, private customerService: CustomerService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.customerService.registerCustomer(this.customerDetails).subscribe(
      (data) => {
          this.toastr.success('Registration is Successful!', 'Success', {
            timeOut: 3000,
          });
          this.router.navigate(['/signin']);
        
      },
      (err) => {
          this.toastr.error('Try with different credentials','Login Error' ,{
          timeOut: 3000,
        });
      }
    )
    }
}
