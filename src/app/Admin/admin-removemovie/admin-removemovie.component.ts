import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MovieService } from 'src/app/movie.service';

@Component({
  selector: 'app-admin-removemovie',
  templateUrl: './admin-removemovie.component.html',
  styleUrls: ['./admin-removemovie.component.css']
})
export class AdminRemovemovieComponent implements OnInit {
  movieId = 0
  constructor(
    private movieService: MovieService, 
    private toastr: ToastrService, 
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const mid = this.activatedRoute.snapshot.paramMap.get("movieId");
    this.movieId = Number(mid);

    this.movieService.removeMovie(this.movieId).subscribe(
      (resp) => {
        this.toastr.success('Movie Removed Successfuly','Success!', {
          timeOut: 3000,
        });
        this.router.navigate(['/admin/movielist'])
      },
      (err) => {
        this.toastr.error('Internal Error','Error!', {
          timeOut: 3000,
        });
        this.router.navigate(['/admin/movie-details/'+this.movieId]);
      }
    )
  }
}
