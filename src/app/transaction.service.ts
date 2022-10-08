import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ITransaction } from './itransaction';
import { TransactionStore } from './transaction-store';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  url = environment.baseUrl + 'transaction';
  httpOptions = {headers: new HttpHeaders({'Content-type':'application/json'})}
  
  constructor(private httpClient: HttpClient, private toastr: ToastrService) { }

  CreateTransaction(td :ITransaction): Observable<any> {
    return this.httpClient.post<any>(this.url,td,this.httpOptions);
  }
}
