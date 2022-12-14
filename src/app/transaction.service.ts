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

  CreateTransaction(transationDetails :ITransaction): Observable<any> {
    return this.httpClient.post<any>(this.url,transationDetails,this.httpOptions);
  }

  GetTransactionsByCustomerId(customerId: number): Observable<any> {
    return this.httpClient.get<any>(this.url + "/cid/" + customerId);
  }

  CancelTransaction(transactionId: number): Observable<any> {
    return this.httpClient.delete<any>(this.url+"/"+transactionId, this.httpOptions);
  }
}
