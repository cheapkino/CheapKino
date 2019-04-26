import {User} from './user';

export interface Genre {
  name: string;
}

export interface Movie {
  poster: string;
  title: string;
  description: string;
  premiere: Date;
  duration: number;
  rating: number;
  genre: Genre;
}

class Review {
  postDate: Date;
  text: string;
  owner: User;
  movie: Movie;
}
