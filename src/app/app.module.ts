import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { SeatBookingComponent } from './seat-booking/seat-booking.component';
import { AdminSigninComponent } from './Admin/admin-signin/admin-signin.component';
import { AdminHeaderComponent } from './Admin/admin-header/admin-header.component';
import { AdminMovielistComponent } from './Admin/admin-movielist/admin-movielist.component';
import { AdminAddmovieComponent } from './Admin/admin-addmovie/admin-addmovie.component';
import { AdminEditmovieComponent } from './Admin/admin-editmovie/admin-editmovie.component';
import { AdminHomeComponent } from './Admin/admin-home/admin-home.component';
import { AdminRemovemovieComponent } from './Admin/admin-removemovie/admin-removemovie.component';
import { AdminMoviedetailsComponent } from './Admin/admin-moviedetails/admin-moviedetails.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    RegisterComponent,
    MoviesListComponent,
    MovieDetailsComponent,
    PageNotFoundComponent,
    HeaderComponent,
    SeatBookingComponent,
    AdminSigninComponent,
    AdminHeaderComponent,
    AdminMovielistComponent,
    AdminAddmovieComponent,
    AdminEditmovieComponent,
    AdminHomeComponent,
    AdminRemovemovieComponent,
    AdminMoviedetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
