import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CustomerStore } from './CustomerStore';
import { ICrendtials } from './icrendtials';
import { ICustomer } from './icustomer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  baseUrl = environment.baseUrl
  url = this.baseUrl + 'customer'
  httpOptions = { headers: new HttpHeaders({'Content-type':'application/json'}) }
  
  constructor(private httpclient: HttpClient, private toastr: ToastrService) { }

  validateCustomerSignIn(creds: ICrendtials): Observable<any> {
    console.log(creds);
    return this.httpclient.post<any>(this.url+'/signin',creds,this.httpOptions).pipe(catchError(this.handleError))
  }

  registerCustomer(creds: ICustomer): Observable<any> {
    console.log(creds);
    return this.httpclient.post<any>(this.url+'/register',creds,this.httpOptions).pipe(catchError(this.handleError))
  }

  getCustomerEmail(): Observable<any> {
    var customerEmail = CustomerStore.email;
    console.log(customerEmail);
    const obsUsingCreate = Observable.create( (observer: { next: (arg0: string) => void; complete: () => void; }) => {
      observer.next( customerEmail )
      observer.complete()
    })
    return obsUsingCreate;
  }

  // method to handle errors in client side
  handleError(error: HttpErrorResponse) {
    let errormessage = 'Invalid Credentials\nTry Again'
    this.toastr.error(errormessage,'Error!', {
      timeOut: 3000,
    });
    return throwError(errormessage);
  }
}