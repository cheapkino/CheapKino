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
  reviews = [];
  username = '';
  userText: string;
  ngOnInit() {
    this.provider.getReviews(this.movie).then(res => {
      this.reviews = this.getReviewsForEdit(res);
    });
    this.provider.getMe().then( res => {
      console.log(res);
      this.username = res.username;
    }).catch(res => { this.username = ''; });
    console.log(this.reviews);
  }

  flipEditable(review) {
    review.onEdit = !review.onEdit;
  }

  getReviewsForEdit(reviews: Review[]) {
    return reviews.map(item => {
      return {
        review: item,
        onEdit: false
      };
    });
  }


  onSave(review) {

      this.provider.putReview(review.review).then( res => {
        this.provider.getReviews(this.movie).then(r => {
          this.reviews = this.getReviewsForEdit(r);
        });
      });
      this.flipEditable(review);
  }

  deleteReview(review) {
      console.log(review);
      this.provider.deleteReview(review.review).then(res => {
        this.provider.getReviews(this.movie).then(r => {
          this.reviews = this.getReviewsForEdit(r);
        });
      });
  }

  postReview() {
    if (this.username !== '') {
      if (this.userText !== undefined || this.userText !== '') {
        this.provider.postReview(this.movie, this.userText).then(res => {
          this.provider.getReviews(this.movie).then(r => {
            this.reviews = this.getReviewsForEdit(r);
            this.userText = '';
          });
        });
      } else {
        alert('Text for post is empty. Please, fill it!');
      }
    } else {
      alert('Your are not signed in. Please tab to login to sign in!');
    }

  }
}
