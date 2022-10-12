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

  formatDate(dateTime: string): string {
    const months = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const date = dateTime.substring(0,10);
    const userEnteredDateArray = date.split('-');
    let yearValue = userEnteredDateArray[0];
    let monthValue = userEnteredDateArray[1];
    let dateValue = userEnteredDateArray[2];
    return dateValue + ' ' + months[parseInt(monthValue)] + ' ' + yearValue;
  }

  ngOnInit(): void {
    this.movieService.getMovieList().subscribe( data => {
      this.movies = data
    })
  }

}
