import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CustomerStore } from 'src/app/CustomerStore';
import { ICrendtials } from 'src/app/icrendtials';
import { AdminService } from '../admin.service';
import { AdminStore } from '../AdminStore';

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
  constructor(private adminService: AdminService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.adminService.validateAdminSignIn(this.creds).subscribe(
      (data) => {
        if(data!=null) {
          AdminStore.email = data.email;
          AdminStore.firstName = data.firstName;
          this.toastr.success('Login Success!', 'Welcome '+AdminStore.firstName, {
            timeOut: 3000,
          });
          this.router.navigate(['/admin/movielist']);
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
