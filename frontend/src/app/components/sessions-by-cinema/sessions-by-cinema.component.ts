import { Component, OnInit } from '@angular/core';
import {Cinema, Session} from '../../models/cinema';
import {ProviderService} from '../../services/provider.service';
import * as moment from 'moment';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sessions-by-cinema',
  templateUrl: './sessions-by-cinema.component.html',
  styleUrls: ['./sessions-by-cinema.component.css']
})
export class SessionsByCinemaComponent implements OnInit {
  public cinema: Cinema;
  public sessions: Session[];

  constructor(private provider: ProviderService, private router: Router) { }

  ngOnInit() {
    this.cinema = this.provider.getCinemaForSession();
    if ( this.cinema === undefined) {
      this.cinema = JSON.parse(localStorage.getItem('cinemaForSession'));
      if (this.cinema === null) {
        this.router.navigateByUrl('').then( res => {
          alert('Please choose cinema to see sessions!');
        });
      }
    }

    this.provider.getSessionsByCinema(this.cinema).then(res => {
      this.sessions = res;
    });

  }

  getTimeOfSession(session: Session) {
    return moment(session.date).format('hh:mm');
  }

  buyLink(session: Session) {
    this.provider.setSessionForReserve(session);
  }

}
