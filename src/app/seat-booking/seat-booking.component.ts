import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ITransaction } from '../itransaction';
import { MovieService } from '../movie.service';
import { TransactionStore } from '../transaction-store';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-seat-booking',
  templateUrl: './seat-booking.component.html',
  styleUrls: ['./seat-booking.component.css']
})
export class SeatBookingComponent implements OnInit {
  // 0 - not selected
  // 1 - selected
  // 2 - booked
  movieId: number = 0;
  seatMap?: any[];
  selectedSeats?: string[] = [];

  


  constructor(private movieService: MovieService, private toastr: ToastrService, private activatedRoute: ActivatedRoute, private router: Router, private transactionService: TransactionService) { }

  onClick(seatNo: string) {
    if(this.seatMap) {
      this.seatMap.forEach(seat => {
        if(seat.status!=2 && seat.seatNo == seatNo) {
          // seat.status = seat.status == 0 ? 1 : 0
          if(seat.status == 0) {
            seat.status = 1;
            this.toastr.success('',`Seat ${seatNo}`, {
              timeOut: 3000,
            });
          }
          else {
            seat.status = 0;
            this.toastr.error('',`Seat ${seatNo}`, {
              timeOut: 3000,
            });
          }
        }
      });
    }
  }
  
  ngOnInit(): void {
    const tid = this.activatedRoute.snapshot.paramMap.get("movieId");
    this.movieId = Number(tid);


    this.movieService.GetSeatMap(this.movieId).subscribe(
      (resp) => {
        this.seatMap = resp
      },
      (err) => {
        this.toastr.error(`Internal Error happened`,`Error`, {
          timeOut: 3000,
        });
      }
    )
  }

  OnSubmit() {
    this.selectedSeats = [];
      if(this.seatMap) {
        this.seatMap.forEach(seat => {
          if(seat.status == 1) this.selectedSeats?.push(seat.seatNo);
        });
      }
      if(this.selectedSeats.length == 0){
        this.toastr.error(`Please select some seats to proceed`,`No seat is selected`, {
          timeOut: 3000,
        });
        return;
      }
      

      TransactionStore.selectedSeats = this.selectedSeats;
      TransactionStore.noOfSelectedSeats = this.selectedSeats.length;
      TransactionStore.totalCost = TransactionStore.seatCost*TransactionStore.noOfSelectedSeats;

      // update the transaction details from the store
      

      this.router.navigate(["/confirm"]);
  }
}