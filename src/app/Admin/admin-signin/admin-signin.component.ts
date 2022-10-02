import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICrendtials } from 'src/app/icrendtials';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-signin',
  templateUrl: './admin-signin.component.html',
  styleUrls: ['./admin-signin.component.css']
})
export class AdminSigninComponent implements OnInit {

  creds: ICrendtials = {
    email: '',
    password: ''
  }
  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.adminService.validateAdminSignIn(this.creds).subscribe(data => {
      if(data!=null) {
        // CustomerStore.email = data.email;
        // CustomerStore.firstName = data.firstName;
        // console.log(CustomerStore.email);
        this.router.navigate(['/admin']);
      }
      else console.log("login failed")
    })
  }

}
