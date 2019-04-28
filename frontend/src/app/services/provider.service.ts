import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';
import {MainService} from './main.service';
import {HttpClient} from '@angular/common/http';
import {Cinema} from '../models/cinema';
@Injectable({
  providedIn: 'root'
})
export class ProviderService extends MainService {
  public detailedMovie: Movie;
  public movieForSession: Movie;
  public cinemaForSession: Cinema;
  constructor(http: HttpClient) {
    super(http);
  }

  getMovies(): Promise<any> {
    return this.get('http://localhost:8000/movie/', {});
  }

  setDetailedMovie(movie: Movie) {
    this.detailedMovie = movie;
  }

  getDetailedMovie(): Movie {
    return this.detailedMovie;
  }

  setMovieForSession(movie: Movie) {
    this.movieForSession = movie;
  }

  getMovieForSession() {
    return this.movieForSession;
  }

  getCinemas(): Promise<any> {
    return this.get('http://localhost:8000/cinema/', {});
  }

  setCinemaForSession(cinema: Cinema) {
    this.cinemaForSession = cinema;
  }

  getCinemaForSession() {
    return this.cinemaForSession;
  }
  getSessions(movie: Movie): Promise<any> {
    return this.get('http://localhost:8000/session/?movie=' + movie.id, {});
  }

  getSessionsByCinema(cinema: Cinema): Promise<any> {
    return this.get('http://localhost:8000/session/?cinema=' + cinema.id, {});
  }
}
