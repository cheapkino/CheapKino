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
  username: string;
  isEditable = false;
  ngOnInit() {
    this.provider.getReviews(this.movie).then(res => {
      this.reviews = res;
      console.log(res);
    });
    this.provider.getMe().then( res => {
      this.username = res.username;
      console.log(res);
    });
  }

  flipEditable() {
    this.isEditable = !this.isEditable;
  }

  onSave(review: Review) {
      this.provider.putReview(review).then( res => {
        this.provider.getReviews(this.movie).then(r => {
          this.reviews = r;
        });
      });
      this.flipEditable();
  }

  deleteReview(review: Review) {
      console.log(review);
      this.provider.deleteReview(review).then(res => {
        this.provider.getReviews(this.movie).then(r => {
          this.reviews = r;
        });
      });
  }

}
