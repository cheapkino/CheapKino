import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';
import {MainService} from './main.service';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProviderService extends MainService {
  constructor(http: HttpClient) {
    super(http);
  }

  getMovies(): Promise<Movie[]> {
      return this.get('http://localhost:8000/movie/', {});
  }

}
