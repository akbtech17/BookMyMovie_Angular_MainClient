import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http'
import { HttpClient } from '@angular/common/http' //hhtp client object helps with all WEBApi methods
import { Observable } from 'rxjs'; // to work or load single component not whole page or app.
import { catchError, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { IMovie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  url = 'http://localhost:51259/api/movies'
  httpOptions = { headers: new HttpHeaders({'Content-type':'application/json'}) }
  
  constructor(private httpclient: HttpClient) { }

  // to get the movie list
  getMovieList():Observable<any> {
    return this.httpclient.get<any[]>(this.url).pipe(catchError(this.handleError))
  }

  // method to handle errors in client side
  handleError(error: HttpErrorResponse) {
    let errormessage = ''
    errormessage = error.status+'\n'+error.statusText+'\n'+error.error
    alert(errormessage)
    return throwError(errormessage);
  }

}
