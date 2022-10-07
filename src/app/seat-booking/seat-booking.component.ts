import { Component, OnInit } from '@angular/core';
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
  constructor(private movieService: MovieService) { }

  onClick(seatNo: string) {
    console.log(seatNo);
    if(this.seatMap) {
      this.seatMap.forEach(seat => {
        if(seat.status!=2 && seat.seatNo == seatNo) seat.status = seat.status == 0 ? 1 : 0
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
}