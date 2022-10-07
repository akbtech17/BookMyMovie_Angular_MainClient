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

  seatMap: any[] = [
    {seatNo:"A1", status:0}, {seatNo:"B1", status:1}, {seatNo:"C1", status:2}, {seatNo:"D1", status:0},
    {seatNo:"A2", status:0}, {seatNo:"B2", status:0}, {seatNo:"C2", status:0}, {seatNo:"D2", status:0},
    {seatNo:"A3", status:0}, {seatNo:"B3", status:0}, {seatNo:"C3", status:0}, {seatNo:"D3", status:0},
    {seatNo:"A4", status:0}, {seatNo:"B4", status:0}, {seatNo:"C4", status:0}, {seatNo:"D4", status:0}
  ]
  constructor(private movieService: MovieService) { }

  onClick(seatNo: string) {
    console.log(seatNo)
    this.seatMap.forEach(seat => {
      if(seat.status!=2 && seat.seatNo == seatNo) seat.status = seat.status == 0 ? 1 : 0
    });
  }
  
  ngOnInit(): void {
    this.movieService.GetSeatMap(1).subscribe(
      (resp) => {
        console.log(resp)
      },
      (err) => {
        console.log(err)
      }
    )
  }
}