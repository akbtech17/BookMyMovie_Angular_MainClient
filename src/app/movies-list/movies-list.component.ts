import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMovie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  movies: IMovie[] = [];
  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(params => {
    //   if(params.searchItem) {
    //     this.movies = this.movieService.getMovieList().filter(movie => movie.movieName.toLowerCase().includes(params.searchItem.toLowerCase()));
    //   }
    // })
    this.movieService.getMovieList().subscribe( data => {
      this.movies = data
      console.log(this.movies)
    })
  }

}
