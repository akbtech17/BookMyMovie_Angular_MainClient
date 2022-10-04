import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICrendtials } from './icrendtials';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  baseUrl = environment.baseUrl
  url = this.baseUrl + 'customer'
  httpOptions = { headers: new HttpHeaders({'Content-type':'application/json'}) }
  
  constructor(private httpclient: HttpClient, private toastr: ToastrService) { }

  validateCustomerSignIn(creds: ICrendtials): Observable<any> {
    return this.httpclient.post<any>(this.url+'/signin',creds,this.httpOptions).pipe(catchError(this.handleError))
  }

  // method to handle errors in client side
  handleError(error: HttpErrorResponse) {
    let errormessage = 'Invalid Credentials\nTry Again'
    this.toastr.error('Error!', errormessage, {
      timeOut: 3000,
    });
    return throwError(errormessage);
  }
}