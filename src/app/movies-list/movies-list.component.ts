import { Component, OnInit } from '@angular/core';
import { IMovie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  movies: IMovie[] = [];
  constructor() { }

  ngOnInit(): void {
    // this.movieService.getMovieList().subscribe( data => {
    //   this.movies = data
    //   console.log(this.movies)
    // })
  }

}
