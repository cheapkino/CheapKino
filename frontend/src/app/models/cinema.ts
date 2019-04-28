import {Movie} from './movie';

export interface City {
  id: number;
  name: string;
}

export interface Cinema {
  id: number;
  name: string;
  address: string;
  city: City;
}

export interface Hall {
  id: number;
  name: string;
  cinema: Cinema;
}

export interface Session {
  id: number;
  date: Date;
  price: number;
  price_student: number;
  price_child: number;
  status: string;
  movie: Movie;
  cinema: Cinema;
  hall: Hall;
}
