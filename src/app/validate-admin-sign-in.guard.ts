import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AdminStore } from './Admin/AdminStore';

@Injectable({
  providedIn: 'root'
})
export class ValidateAdminSignInGuard implements CanActivate {
  constructor(private router: Router, private toastr: ToastrService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // if(AdminStore.email == '') {
      //   // alert("To access this section of app, user must be Signed In!")
      //   this.toastr.error('Only accessible by Admin!','Error Message',  {
      //     timeOut: 3000,
      //   });
      //   this.router.navigate(['/admin/signin']);
      // }
    return true;
  }
  
}
