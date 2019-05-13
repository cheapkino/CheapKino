import { Component, OnInit } from '@angular/core';
import {ProviderService} from '../../services/provider.service';
import {Router} from '@angular/router';
import {Seat, Session} from '../../models/cinema';

@Component({
  selector: 'app-reserve-modal',
  templateUrl: './reserve-modal.component.html',
  styleUrls: ['./reserve-modal.component.css']
})
export class ReserveModalComponent implements OnInit {

  constructor(private provider: ProviderService, private router: Router) { }
  public seatForReserve: Seat;
  public session: Session;
  public option = 'Взрослый';
  public prices;
  ngOnInit() {
    this.seatForReserve = this.provider.getSeatForReserve();
    this.getSession();
    if ( this.seatForReserve === undefined) {
      this.seatForReserve = JSON.parse(localStorage.getItem('seatForReserve'));
      if (this.seatForReserve === null) {
        this.router.navigateByUrl('').then( res => {
          alert('Please choose session to buy tickets!');
        });
      }
      this.provider.getPrice(this.session).then( res => {
        console.log(res);
        this.prices =  res;
      });
    }
    console.log(this.seatForReserve);
  }

  getSession() {
    this.session = this.provider.getSessionForReserve();
    if (this.session === undefined) {
      this.session = JSON.parse(localStorage.getItem('sessionForReserve'));
    }
  }

  getPrice() {
    switch (this.option) {
      case 'Взрослый':
        return this.prices.price;
      case 'Студенческий':
        return this.prices.price_student;
      case 'Детский':
        return this.prices.price_child;
      default:
        return this.prices.price;
    }
  }

  reserveSeat() {
    this.provider.reserveSeat(this.session, this.seatForReserve).then( res => {
      console.log(res);
    });
  }
}
