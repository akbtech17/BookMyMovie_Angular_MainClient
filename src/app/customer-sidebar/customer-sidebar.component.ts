import { Component, OnInit } from '@angular/core';
import { TransactionStore } from '../transaction-store';

@Component({
  selector: 'app-customer-sidebar',
  templateUrl: './customer-sidebar.component.html',
  styleUrls: ['./customer-sidebar.component.css']
})
export class CustomerSidebarComponent implements OnInit {
  customerId = 0;
  constructor() { }

  ngOnInit(): void {
    this.customerId = TransactionStore.customerId;
    console.log(this.customerId);
  }

}
