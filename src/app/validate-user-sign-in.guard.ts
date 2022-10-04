import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { CustomerStore } from './CustomerStore';

@Injectable({
  providedIn: 'root'
})
export class ValidateUserSignInGuard implements CanActivate {
  constructor(private router: Router, private toastr: ToastrService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(CustomerStore.email == '') {
        // alert("To access this section of app, user must be Signed In!")
        this.toastr.error('Error Message', 'To access this section of app, user must be Signed In!', {
          timeOut: 3000,
        });
        this.router.navigate(['/signin']);
      }
    return true;
  }
}
