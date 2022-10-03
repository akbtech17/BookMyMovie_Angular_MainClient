import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMovie } from 'src/app/movie';
import { MovieService } from 'src/app/movie.service';

@Component({
  selector: 'app-admin-movielist',
  templateUrl: './admin-movielist.component.html',
  styleUrls: ['./admin-movielist.component.css']
})
export class AdminMovielistComponent implements OnInit {
  movies: IMovie[] = []
  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.movieService.getMovieList().subscribe( data => {
      this.movies = data
    })
  }

}
