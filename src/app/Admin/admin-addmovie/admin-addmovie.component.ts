import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IMovie } from 'src/app/movie';
import { MovieService } from 'src/app/movie.service';

@Component({
  selector: 'app-admin-addmovie',
  templateUrl: './admin-addmovie.component.html',
  styleUrls: ['./admin-addmovie.component.css']
})
export class AdminAddmovieComponent implements OnInit {
  movieData : IMovie = {
    movieId: 0,
    movieName: "",
    releaseDate: "",
    ratings: 0,
    genres: "",
    imageUrl: "",
    costPerSeat: 0,
    showTime: "",
    duration: "",
    ageRating: "",
    language: "",
    movieType: "Choose Theatre Type",
    isAdult: true
  }
  theatreTypeList: string[] = ["2D", "3D", "4D MAX", "IMAX"]
  constructor(private movieService: MovieService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }
   
  onSubmit() {
    // console.log(this.movieData);
    this.movieService.addMovie(this.movieData).subscribe(
      (resp) => {
        this.toastr.success('Movie added successfuly','Success!', {
          timeOut: 3000,
        });
        this.router.navigate(["admin/movielist"])
      },
      (err) => {
        this.toastr.error('Some internal error happened!','Error!', {
          timeOut: 3000,
        });
      }
    )
  }
}
