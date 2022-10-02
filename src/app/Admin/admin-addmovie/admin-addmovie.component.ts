import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMovie } from 'src/app/movie';
import { MovieService } from 'src/app/movie.service';

@Component({
  selector: 'app-admin-addmovie',
  templateUrl: './admin-addmovie.component.html',
  styleUrls: ['./admin-addmovie.component.css']
})
export class AdminAddmovieComponent implements OnInit {
  movieData : IMovie = {
    movieId: 9,
    movieName: "Brahmastra",
    releaseDate: "2022-09-03T12:45:56",
    ratings: 78,
    genres: "Action, Adventure, Fantasy",
    imageUrl: "image2.jpg",
    costPerSeat: 750,
    showTime: "2022-09-03T12:45:56",
    duration: "2h 47m",
    ageRating: "UA",
    language: "Hindi",
    movieType: "IMAX 3D"
  }
  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit(): void {
  }
   
  onSubmit() {
    console.log(this.movieData);
    this.movieService.addMovie(this.movieData).subscribe(data => {
      if(data!=null) {
        alert("movie added success");
        this.router.navigate(['admin/movielist'])
        return;
      }
    })
    alert("failed");
  }
}
