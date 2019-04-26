import {Movie} from './movie';

export interface City {
  name: string;
}

export interface Cinema {
  name: string;
  address: string;
  city: City;
}

export interface Hall {
  name: string;
  cinema: Cinema;
}

export interface Session {
  sessionDate: Date;
  price: number;
  priceForStudent: number;
  priceForChildren: number;
  status: string;
  movie: Movie;
  cinema: Cinema;
}
