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
  session_date: Date;
  price: number;
  price_student: number;
  price_child: number;
  status: string;
  movie: Movie;
  cinema: Cinema;
}
