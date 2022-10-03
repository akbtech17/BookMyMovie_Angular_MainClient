import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMovie } from 'src/app/movie';
import { MovieService } from 'src/app/movie.service';

@Component({
  selector: 'app-admin-moviedetails',
  templateUrl: './admin-moviedetails.component.html',
  styleUrls: ['./admin-moviedetails.component.css']
})
export class AdminMoviedetailsComponent implements OnInit {

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
