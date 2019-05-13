import {User} from './user';

export interface Genre {
  id: number;
  name: string;
}

export interface Movie {
  id: number;
  poster: string;
  title: string;
  description: string;
  premiere: Date;
  duration: number;
  rating: number;
  genre: Genre;
}

export interface Review {
  id: number;
  post_date: Date;
  text: string;
  owner: User;
  movie: Movie;
}
