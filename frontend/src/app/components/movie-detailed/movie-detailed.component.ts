import {Component, OnInit} from '@angular/core';
import {Movie} from '../../models/movie';
import {ProviderService} from '../../services/provider.service';
import {DomSanitizer} from '@angular/platform-browser';
import {Router} from '@angular/router';

@Component({
  selector: 'app-movie-detailed',
  templateUrl: './movie-detailed.component.html',
  styleUrls: ['./movie-detailed.component.css']
})
export class MovieDetailedComponent implements OnInit {
  public movie: Movie;
  public image;
  constructor(private provider: ProviderService, private sanitizer: DomSanitizer, private router: Router) { }
  ngOnInit() {
    this.movie = this.provider.getDetailedMovie();
    if (this.movie === undefined) {
      this.router.navigateByUrl('');
    } else {
      this.image = this.sanitizer.bypassSecurityTrustStyle(`url(${this.movie.poster})`);
    }
  }

}
