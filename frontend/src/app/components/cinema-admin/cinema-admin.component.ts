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
  session: Session = {
    id: -1,
    date: new Date(),
    price: 0,
    price_student: 0,
    price_child: 0,
    movie: null,
    hall: null,
    cinema: null
  };

  id: number = -1;

  cinemas: Cinema[];
  currentCinema: string;

  halls: Hall[];
  currentHall: string;

  movies: Movie[];
  currentMovie: string;

  hall_id: number;
  movie_id: number;

  year: number = 0;
  month: number = 0;
  day: number = 0;
  hour: number = 0;
  minute: number = 0;

  constructor(private provider: ProviderService) { }

  ngOnInit() {
    this.getCinemas();
    this.getMovies();
  }

  getCinemas() {
    this.provider.getCinemas().then(res => {
      this.cinemas = res;

      console.log(res);
    });
  }

  getHalls(cinema: Cinema) {
    this.provider.getHallsByCinema(cinema).then(res => {
      this.halls = res;

      console.log(res);
    });
  }

  selectCinema(cinema: Cinema) {
    if (cinema) {
      this.getHalls(cinema);    
    }
  }

  getMovies() {
    this.provider.getMovies().then(res => {
      this.movies = res.results;
      
      console.log(res.results);
    });
  }

  selectHall(hall_id: number) {
    this.hall_id = hall_id;
  }
  
  selectMovie(movie_id: number) {
    this.movie_id = movie_id;
  }

  createSession() {
    this.session.date = new Date(this.year, this.month, this.day, this.hour, this.minute, 0, 0);
    


    // console.log(this.);
    // console.log(this.currentHall);

    this.provider.createSession(this.session, this.movie_id, this.hall_id).then(res => {
      console.log('session created!');
    });
  }

}
