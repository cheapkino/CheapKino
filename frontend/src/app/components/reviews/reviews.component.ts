import {Component, Input, OnInit} from '@angular/core';
import {Movie, Review} from '../../models/movie';
import {ProviderService} from '../../services/provider.service';
@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  constructor(private provider: ProviderService) { }
  @Input()
  movie: Movie;
  reviews: Review[];
  ngOnInit() {
    this.provider.getReviews(this.movie).then(res => {
      this.reviews = res;
      console.log(res);
    });
  }

}
