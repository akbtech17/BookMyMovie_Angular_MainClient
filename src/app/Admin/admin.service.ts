import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICrendtials } from '../icrendtials';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  url = environment.baseUrl+'customer'
  httpOptions = { headers: new HttpHeaders({'Content-type':'application/json'}) }
  
  constructor(private httpclient: HttpClient) { }

  validateAdminSignIn(creds: ICrendtials): Observable<any> {
    return this.httpclient.post<any>(this.url+'/signin',creds,this.httpOptions).pipe(catchError(this.handleError))
  }

  // method to handle errors in client side
  handleError(error: HttpErrorResponse) {
    let errormessage = 'Invalid Credentials\nTry Again'
    alert(errormessage)
    return throwError(errormessage);
  }
}
