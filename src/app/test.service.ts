import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http'
import { HttpClient } from '@angular/common/http' //hhtp client object helps with all WEBApi methods
import { Observable } from 'rxjs'; // to work or load single component not whole page or app.
import { catchError, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  url = 'https://anshulkumarapi246.azurewebsites.net/api/test/set-database'
  httpOptions = { headers: new HttpHeaders({'Content-type':'application/json'}) }
  
  constructor(private httpclient: HttpClient) { }

  // to set the database
  setDatabase() {
    return this.httpclient.get(this.url)
  }
}
