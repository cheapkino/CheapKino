import {Component, Input, OnInit} from '@angular/core';
import {Movie} from '../../models/movie';
import * as moment from 'moment';
import {ProviderService} from '../../services/provider.service';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input()
  movie: Movie;
  constructor(private provider: ProviderService) {
  }

  ngOnInit() {}

  getDateString() {
    return moment(this.movie.premiere).format('DD-MM-YYYY');
  }

  setDetailedMovie(movie: Movie) {
    this.provider.setDetailedMovie(movie);
  }

}
