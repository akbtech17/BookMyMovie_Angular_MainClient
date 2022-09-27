import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMovie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movieId?: number
  movieDetails?: IMovie
  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const tid = this.activatedRoute.snapshot.paramMap.get("movieId");
    this.movieId = Number(tid);
    console.log(this.movieId);

    this.movieService.getMovie(this.movieId).subscribe(data => {
      this.movieDetails = data;
    })
  }
}
