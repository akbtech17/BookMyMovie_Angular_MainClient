import { Component, OnInit } from '@angular/core';
import { TransactionStore } from '../transaction-store';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {
  customerId: number = 0;
  constructor() { }

  ngOnInit(): void {
    this.customerId =  TransactionStore.customerId;
  }

}
