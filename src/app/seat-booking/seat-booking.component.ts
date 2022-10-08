import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-seat-booking',
  templateUrl: './seat-booking.component.html',
  styleUrls: ['./seat-booking.component.css']
})
export class SeatBookingComponent implements OnInit {
  // 0 - not selected
  // 1 - selected
  // 2 - booked
  seatMap?: any[];
  selectedSeats?: string[] = [];
  constructor(private movieService: MovieService, private toastr: ToastrService, private activatedRoute: ActivatedRoute, private router: Router) { }

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
    this.movieService.GetSeatMap(1).subscribe(
      (resp) => {
        this.seatMap = resp
      },
      (err) => {
        console.log(err)
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
      }
      else {
        this.toastr.success(`Booking ${this.selectedSeats} ${this.selectedSeats.length == 1 ? 'seat' : 'seats'} for you`,`Processing your request`, {
          timeOut: 3000,
        });
      }
  }
}