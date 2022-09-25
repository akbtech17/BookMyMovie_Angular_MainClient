import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
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
  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.customerService.validateCustomerSignIn(this.creds).subscribe(data => {
      if(data!=null) {
        CustomerStore.email = data.email;
        CustomerStore.firstName = data.firstName;
        console.log(CustomerStore.email);
        this.router.navigate(['/']);
      }
      else console.log("login failed")
    })
  }

}
