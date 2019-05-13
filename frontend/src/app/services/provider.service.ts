import { Injectable } from '@angular/core';
import {Movie, Review} from '../models/movie';
import {MainService} from './main.service';
import {HttpClient} from '@angular/common/http';
import {Cinema, Seat, Session, Hall} from '../models/cinema';
import {Token} from '../models/user';
import * as moment from 'moment';


@Injectable({
  providedIn: 'root'
})

export class ProviderService extends MainService {
  public detailedMovie: Movie;
  public movieForSession: Movie;
  public cinemaForSession: Cinema;
  public sessionForReserve: Session;
  public seatForReserve: Seat;
  public username: string;
  public logged = false;
  public isAdmin = false;

  constructor(http: HttpClient) {
    super(http);
  }

  formatDateForDjango(date: Date) {
    const time =  moment(date).format('YYYY-MM-DDThh:mm');
    return time;
  }

  getMe() {
    return this.get('http://localhost:8000/user/me/', {});
  }

  putReview(review: Review): Promise<any> {
    return this.put(`http://localhost:8000/movie/${review.movie}/review/${review.id}/`, review);
  }

  deleteReview(review: Review): Promise<any> {
    return this.delet(`http://localhost:8000/movie/${review.movie}/review/${review.id}/`, {});
  }

  postReview(moviE: Movie, texT: string): Promise<any> {
    return this.post(`http://localhost:8000/movie/${moviE.id}/review/`, {
      text: texT,
      movie: moviE.id,
      post_date: this.formatDateForDjango(new Date())
    });
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

  getHallsByCinema(cinema: Cinema): Promise<Hall[]> {
    return this.get('http://localhost:8000/cinema/' + cinema.id + '/hall/', {});
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

  getReviews(movie: Movie): Promise<Review[]> {
    return this.get(`http://localhost:8000/movie/${movie.id}/review/`, {});
  }

  getPrice(session: Session): Promise<any> {
    return this.get(`http://localhost:8000/session/${session.id}/cheap/`, {});
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

  setSeatForReserve(seat: Seat) {
    this.seatForReserve = seat;
    localStorage.setItem('seatForReserve', JSON.stringify(seat));
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
    return this.get('http://localhost:8000/session/' + session.id + '/reserve/',  {});
  }

  getSeatForReserve(): Seat {
    return this.seatForReserve;
  }

  reserveSeat(session: Session, seat: Seat) {
    return this.put(`http://localhost:8000/session/${session.id}/reserve/${seat.id}/`, seat);
  }

  createSession(session: Session, movie_id: number, hall_id: number) {
    return this.post('http://localhost:8000/session/', {
      date: session.date,
      price: session.price,
      price_student: session.price_student,
      price_child: session.price_student,
      movie_id: movie_id,
      hall_id: hall_id
    });
  }

}
