import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ITransaction } from '../itransaction';
import { TransactionStore } from '../transaction-store';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-confirmation-page',
  templateUrl: './confirmation-page.component.html',
  styleUrls: ['./confirmation-page.component.css']
})
export class ConfirmationPageComponent implements OnInit {
  transactionDetails: ITransaction = {
    customerId:0,
    transactionId:0,
    transactionTime:"",
    movieId: 0,
    seats: []
  }
  transactionSuccess:boolean = false;
  constructor(private router: Router, private transactionService: TransactionService, private toastr: ToastrService) { }

  ngOnInit(): void {
      this.transactionDetails.customerId = TransactionStore.customerId;
      this.transactionDetails.movieId = TransactionStore.movieId;
      this.transactionDetails.transactionTime = "2022-09-03T12:45:56";
      this.transactionDetails.transactionId = 0;
      this.transactionDetails.seats = TransactionStore.selectedSeats;

      this.transactionService.CreateTransaction(this.transactionDetails).subscribe(
        (resp) => {
          this.transactionSuccess = true;
          this.toastr.success('Booking Confirmed','Success', {
            timeOut: 10000,
          });
        },
        (err) => {
          this.transactionSuccess = false;
          this.toastr.error('Something went wrong','Error', {
            timeOut: 10000,
          })
        }
      )
  }

  OnClick() {
    this.router.navigate(["/movies-list"]);
  }
}
