import { Component, OnInit } from '@angular/core';
import {ProviderService} from '../../services/provider.service';
import {Router} from '@angular/router';
import {Hall, Seat, Session} from '../../models/cinema';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {

  constructor(private provider: ProviderService, private router: Router) { }
  public session: Session;
  public hall: Hall;
  public seats: Seat[][];
  ngOnInit() {
    this.session = this.provider.getSessionForReserve();
    if ( this.session === undefined) {
      this.session = JSON.parse(localStorage.getItem('sessionForReserve'));
      if (this.session === null) {
        this.router.navigateByUrl('').then( res => {
          alert('Please choose session to buy tickets!');
        });
      }
    }
    this.getHall();
  }

  getHall() {
    this.provider.getHall(this.session).then( res => {
      this.hall = res;
      console.log(this.hall);
      this.getSeats();
    });

  }

  getSeats() {
    this.provider.getSeats(this.session).then( res => {
      const places = res;
      console.log(places);
      const arr = [];
      for (let i = 0; i < this.hall.length; i++) {
        const row = places.slice(i * 5, (i + 1) * 5);
        arr.push(row);
      }
      this.seats = arr;
      console.log(this.seats);
    });
  }

  reserveSeat(seat: Seat) {
    this.provider.setSeatForReserve(seat);
    this.router.navigateByUrl('reserveSeat').then();
  }

  isReserved(seat: Seat) {
    return seat.user !== null;
  }

}
