import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BaseUrl } from './BaseUrl';
import { ICrendtials } from './icrendtials';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  url = BaseUrl.url + 'customer'
  httpOptions = { headers: new HttpHeaders({'Content-type':'application/json'}) }
  
  constructor(private httpclient: HttpClient) { }

  validateCustomerSignIn(creds: ICrendtials): Observable<any> {
    return this.httpclient.post<any>(this.url+'/signin',creds,this.httpOptions).pipe(catchError(this.handleError))
  }

  // method to handle errors in client side
  handleError(error: HttpErrorResponse) {
    let errormessage = 'Invalid Credentials\nTry Again'
    alert(errormessage)
    return throwError(errormessage);
  }
}