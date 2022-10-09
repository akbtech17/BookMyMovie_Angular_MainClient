import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IMovie } from '../movie';
import { MovieService } from '../movie.service';
import { TransactionStore } from '../transaction-store';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movieId: number = 0
  movieDetails?: IMovie
  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const tid = this.activatedRoute.snapshot.paramMap.get("movieId");
    this.movieId = Number(tid);
    console.log(this.movieId);

    this.movieService.getMovie(this.movieId).subscribe(data => {
      this.movieDetails = data;
    })
  }

  OnBookClick() {
    TransactionStore.movieId = this.movieId;
    if(this.movieDetails) {
      TransactionStore.movieName = this.movieDetails.movieName;
      TransactionStore.duration = this.movieDetails.duration;
      TransactionStore.showTime = this.movieDetails.showTime;
      TransactionStore.seatCost = this.movieDetails.costPerSeat;
      TransactionStore.imageUrl = this.movieDetails.imageUrl;
    }
    this.router.navigate(["/sbook/"+this.movieId]);
  }
}
