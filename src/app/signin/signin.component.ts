import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from '../customer.service';
import { CustomerStore } from '../CustomerStore';
import { ICrendtials } from '../icrendtials';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  creds: ICrendtials = {
    email: '',
    password: ''
  }
  constructor(private customerService: CustomerService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.customerService.validateCustomerSignIn(this.creds).subscribe(
      (data) => {
        if(data!=null) {
          CustomerStore.email = data.email;
          CustomerStore.firstName = data.firstName;
          this.toastr.success('Login Success!', 'Welcome '+CustomerStore.firstName, {
            timeOut: 3000,
          });
          this.router.navigate(['/']);
        }
      },
      (err) => {
          this.toastr.error('Try with different credentials','Login Error' ,{
          timeOut: 3000,
        });
      }
    )
  }

}
