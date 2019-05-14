import { Component, OnInit } from '@angular/core';
import { Session, Cinema, Hall } from 'src/app/models/cinema';
import { ProviderService } from 'src/app/services/provider.service';
import { Movie } from 'src/app/models/movie';
import { MovieComponent } from '../movie/movie.component';

@Component({
  selector: 'app-cinema-admin',
  templateUrl: './cinema-admin.component.html',
  styleUrls: ['./cinema-admin.component.css']
})
export class CinemaAdminComponent implements OnInit {


  constructor(private provider: ProviderService) { }
  public years = [2019, 2020, 2021];
  public months = this.getMonth();
  public days = this.getDays();
  public hours = this.getHours();
  public minutes = this.getMinutes();
  public forChildren: string;
  public forStudents: string;
  public forAdults: string;
  public cinemas: Cinema[] = [];
  public halls: Hall[] = [];
  public movies: Movie[] = [];
  public year;
  public month;
  public day;
  public hour;
  public minute;
  public currentCinemaId: number;
  public currentHallId: number;
  public currentMovieId: number;
  public session: Session = {
    id: -1,
    date: new Date(),
    price: 0,
    price_student: 0,
    price_child: 0,
    movie: null,
    hall: null,
    cinema: null
  };
  ngOnInit() {
      this.provider.getCinemas().then( res => {
        this.cinemas = res;
      });
      this.provider.getMovies().then( res => {
        this.movies = res.results;
      });
  }

  getMonth() {
    const arr = [];
    for (let i = 1; i <= 12; i++) {
      arr.push(i);
    }
    return arr;
  }

  getDays() {
    const arr = [];
    for (let i = 1; i <= 31; i++) {
      arr.push(i);
    }
    return arr;
  }

  getHours() {
    const arr = [];
    for (let i = 0; i <= 23; i++) {
      arr.push(i);
    }
    return arr;
  }

  getMinutes() {
    const arr = [];
    for (let i = 0; i <= 59; i++) {
      arr.push(i);
    }
    return arr;
  }

  getHalls() {
    if (this.currentCinemaId) {
      this.provider.getCinema(this.currentCinemaId).then(res => {
        this.provider.getHallsByCinema(res).then(r => {
          this.halls = r;
        });
      });
    }
  }

  createSession() {
    this.session.date = new Date(this.year, --this.month, this.day, this.hour, this.minute, 0, 0);
    this.session.price_child = Number(this.forChildren);
    this.session.price_student = Number(this.forStudents);
    this.session.price = Number(this.forAdults);
    this.provider.createSession(this.session, this.currentMovieId, this.currentHallId).then(res => {
      alert('Сессия добавлена!');
    });
  }
}
