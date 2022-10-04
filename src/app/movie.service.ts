import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http'
import { HttpClient } from '@angular/common/http' //hhtp client object helps with all WEBApi methods
import { Observable } from 'rxjs'; // to work or load single component not whole page or app.
import { catchError, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { IMovie } from './movie';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  url = environment.baseUrl + 'movies'
  httpOptions = { headers: new HttpHeaders({'Content-type':'application/json'}) }
  
  constructor(private httpclient: HttpClient, private toastr: ToastrService) { }

  // to get the movie list
  getMovieList():Observable<IMovie[]> {
    return this.httpclient.get<IMovie[]>(this.url).pipe(catchError(this.handleError))
  }

  getMovie(movieId: number):Observable<IMovie> {
    return this.httpclient.get<IMovie>(this.url+'/'+movieId).pipe(catchError(this.handleError))
  }

  addMovie(movieData: IMovie):Observable<IMovie> {
    return this.httpclient.post<IMovie>(this.url, movieData,this.httpOptions).pipe(catchError(this.handleError))
  }

  removeMovie(movieId: number) {
    return this.httpclient.delete(this.url+"/"+movieId,this.httpOptions).pipe(catchError(this.handleError))
  }

  // method to handle errors in client side
  handleError(error: HttpErrorResponse) {
    let errormessage = ''
    errormessage = error.status+'\n'+error.statusText+'\n'+error.error
    this.toastr.error(errormessage,'Error!', {
      timeOut: 3000,
    });
    return throwError(errormessage);
  }

}
