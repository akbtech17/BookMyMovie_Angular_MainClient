import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerStore } from '../CustomerStore';
import { IMovie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  movies: IMovie[] = [];
  private _listFilter: string = '';
  filteredMovies: IMovie[] = [];
  isCustomerLoggedIn = false;

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value:string) {
    this._listFilter = value;
    // this.filteredMovies = this.performFilter(value)
  }

  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.movieService.getMovieList().subscribe( data => {
      this.movies = data
      this.filteredMovies = data
    })
    this.isCustomerLoggedIn = CustomerStore.email != "";
  }

  performFilter(): void {
      var key = this.listFilter;
      this.filteredMovies =  this.movies.filter((movie: IMovie) => movie.movieName.toLocaleLowerCase().includes(key));
    }
}
