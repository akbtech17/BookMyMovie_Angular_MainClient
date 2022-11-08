import { Component, OnInit } from '@angular/core';
import { TransactionStore } from '../transaction-store';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {
  customerId: number = 0;
  transactions: any;
  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.customerId =  TransactionStore.customerId;
    this.transactionService.GetTransactionsByCustomerId(this.customerId).subscribe(
      data => {
        this.transactions = data;
        console.log(this.transactions);
      }
    )
  }

}
