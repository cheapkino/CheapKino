import {Component, Input, OnInit} from '@angular/core';
import {Movie} from '../../models/movie';
import * as moment from 'moment';

import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input()
  movie: Movie;
  constructor() {
  }

  ngOnInit() {}

  getDateString() {
    return moment(this.movie.premiere).format('DD-MM-YYYY');
  }
}
