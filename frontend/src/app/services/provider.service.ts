import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';
import {MainService} from './main.service';
import {HttpClient} from '@angular/common/http';
import {Cinema, Session} from '../models/cinema';
import {Token} from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class ProviderService extends MainService {
  public detailedMovie: Movie;
  public movieForSession: Movie;
  public cinemaForSession: Cinema;
  public sessionForReserve: Session;
  public logged = false;
  constructor(http: HttpClient) {
    super(http);
  }

  getMovies(): Promise<any> {
    return this.get('http://localhost:8000/movie/', {});
  }

  getCinemas(): Promise<any> {
    return this.get('http://localhost:8000/cinema/', {});
  }

  getSessions(movie: Movie): Promise<any> {
    return this.get('http://localhost:8000/session/?movie=' + movie.id, {});
  }

  getSessionsByCinema(cinema: Cinema): Promise<any> {
    return this.get('http://localhost:8000/session/?cinema=' + cinema.id, {});
  }

  getHall(session: Session): Promise<any> {
    return this.get('http://localhost:8000/cinema/' + session.hall.cinema.id + '/hall/' + session.hall.id + '/' , {});
  }

  createUser(usernamE: string, passworD: string) {
    return this.post('http://localhost:8000/user/register/', {
      username: usernamE,
      password: passworD,
      groups: [1]
    });
  }

  login(usernamE: string, passworD: string): Promise<Token> {
    return this.post('http://localhost:8000/user/login/', {
      username: usernamE,
      password: passworD
    });
  }

  logout(): Promise<any> {
    return this.post('http://localhost:8000/user/logout/', {});
  }

  setSessionForReserve(session: Session) {
    this.sessionForReserve = session;
    localStorage.setItem('sessionForReserve', JSON.stringify(session));
  }

  setDetailedMovie(movie: Movie) {
    this.detailedMovie = movie;
    localStorage.setItem('detailedMovie', JSON.stringify(movie));
  }

  setMovieForSession(movie: Movie) {
    this.movieForSession = movie;
    localStorage.setItem('movieForSession', JSON.stringify(movie));
  }

  setCinemaForSession(cinema: Cinema) {
    this.cinemaForSession = cinema;
    localStorage.setItem('cinemaForSession', JSON.stringify(cinema));
  }

  getMovieForSession() {
    return this.movieForSession;
  }

  getSessionForReserve() {
    return this.sessionForReserve;
  }

  getCinemaForSession() {
    return this.cinemaForSession;
  }

  getDetailedMovie(): Movie {
    return this.detailedMovie;
  }

  getSeats(session: Session): Promise<any> {
    return this.get('http://localhost:8000/session' + session.id + '/reserve/',  {});
  }

}
