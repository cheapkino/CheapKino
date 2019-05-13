import {Movie} from './movie';
import {User} from './user';

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
  width: number;
  length: number;
}

export interface Session {
  id: number;
  date: Date;
  price: number;
  price_student: number;
  price_child: number;
  movie: Movie;
  cinema: Cinema;
  hall: Hall;
}

export interface Seat {
  id: number;
  user: User;
  seat: number;
  session: number;
}

