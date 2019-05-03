import { Component, OnInit } from '@angular/core';
import {ProviderService} from '../../services/provider.service';
import {Router} from '@angular/router';
import {Hall, Seats, Session} from '../../models/cinema';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {

  constructor(private provider: ProviderService, private router: Router) { }
  public session: Session;
  public hall: Hall;
  public seats: Seats[][];
  ngOnInit() {
    this.session = this.provider.getSessionForReserve();
    console.log(this.session);
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
    // this.provider.getSeats(this.session).then( res => {
    //   const seat = res;
    //
    // });
    let arr = [];
    for (let i = 0; i < this.hall.length; i++) {
      let row = [];
      for (let j = 0; j < this.hall.width; j++) {
        row.push(1);
      }
      arr.push(row);
    }
    this.seats = arr;
  }



}
