import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminMoviedetailsComponent } from './Admin/admin-moviedetails/admin-moviedetails.component';
import { AdminRemovemovieComponent } from './Admin/admin-removemovie/admin-removemovie.component';
import { AdminAddmovieComponent } from './Admin/admin-addmovie/admin-addmovie.component';
import { AdminEditmovieComponent } from './Admin/admin-editmovie/admin-editmovie.component';
import { AdminHomeComponent } from './Admin/admin-home/admin-home.component';
import { AdminMovielistComponent } from './Admin/admin-movielist/admin-movielist.component';
import { AdminSigninComponent } from './Admin/admin-signin/admin-signin.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { SeatBookingComponent } from './seat-booking/seat-booking.component';
import { SigninComponent } from './signin/signin.component';
import { ValidateUserSignInGuard } from './validate-user-sign-in.guard';
import { ValidateAdminSignInGuard } from './validate-admin-sign-in.guard';
import { ConfirmationPageComponent } from './confirmation-page/confirmation-page.component';

const routes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'movies-list', component: MoviesListComponent },
  { path: 'movie-details/:movieId', component: MovieDetailsComponent, canActivate:[ValidateUserSignInGuard] },
  { path: 'sbook/:movieId', component: SeatBookingComponent },
  { path: 'confirm', component: ConfirmationPageComponent },
  { 
    path : 'admin', 
    component: AdminHomeComponent,
    children: [
      {path:'signin', component:AdminSigninComponent},
      {path:'addmovie', component:AdminAddmovieComponent},
      {path:'editmovie/:movieId', component:AdminEditmovieComponent},
      {path:'movielist', component:AdminMovielistComponent},
      {path:'removemovie/:movieId', component:AdminRemovemovieComponent},
      {path:'movie-details/:movieId', component:AdminMoviedetailsComponent},


      {path: '', redirectTo: 'movielist', pathMatch: 'full' },
    ]
  },
  
  // default route 
  {path: '', redirectTo: 'movies-list', pathMatch: 'full' },

  // wildcard route
  {path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }