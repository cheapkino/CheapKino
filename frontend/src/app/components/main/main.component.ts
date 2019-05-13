import {Component, OnInit} from '@angular/core';
import {Movie} from '../../models/movie';
import {ProviderService} from '../../services/provider.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public movies: Movie[] = [];
  public movieTop: Movie[] = [];
  constructor(private provider: ProviderService) { }

  ngOnInit() {
      this.provider.getMovies().then( res =>  {
        this.movies = res.results; // With pagination it will be res.result
      });
      if (localStorage.getItem('token')) {
        this.provider.logged = true;
      }
      this.provider.getMe().then( res => {
        this.provider.isAdmin = res.is_superuser;
      });
  }

  getLoginStatus() {
    return this.provider.logged;
  }

  getAdminStatus() {
    return this.provider.isAdmin || JSON.parse(localStorage.getItem('isAdmin'));
  }
}
