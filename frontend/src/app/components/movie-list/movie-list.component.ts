import {Component, OnInit} from '@angular/core';
import {ProviderService} from '../../services/provider.service';
import {Movie} from '../../models/movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  public movies: Movie[];
  constructor(private provider: ProviderService) { }


  ngOnInit() {
    this.provider.getMovies().then( res =>  {
      this.movies = res.results; // With pagination it will be res.result
    });
  }

}
