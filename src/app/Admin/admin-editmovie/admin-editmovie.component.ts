import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IMovie } from 'src/app/movie';
import { MovieService } from 'src/app/movie.service';

@Component({
  selector: 'app-admin-editmovie',
  templateUrl: './admin-editmovie.component.html',
  styleUrls: ['./admin-editmovie.component.css']
})
export class AdminEditmovieComponent implements OnInit {
  theatreTypeList: string[] = ["2D", "3D", "4D MAX", "IMAX"]
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
    movieType: "",
    isAdult: false
  }
  movieId?: number;
  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute, private toastr: ToastrService, private router: Router) { }
  

  ngOnInit(): void {
    const tid = this.activatedRoute.snapshot.paramMap.get("movieId");
    this.movieId = Number(tid);

    this.movieService.getMovie(this.movieId).subscribe(data => {
      this.movieData = data;
    })
  }
  onSubmit() {
    // console.log(this.movieData);
    this.movieService.updateMovie(this.movieData).subscribe(
      (resp) => {
        this.toastr.success('Movie edited successfuly','Success!', {
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
