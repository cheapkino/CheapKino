import { Component, OnInit } from '@angular/core';
import {Cinema, Session} from '../../models/cinema';
import {ProviderService} from '../../services/provider.service';
import * as moment from 'moment';

@Component({
  selector: 'app-sessions-by-cinema',
  templateUrl: './sessions-by-cinema.component.html',
  styleUrls: ['./sessions-by-cinema.component.css']
})
export class SessionsByCinemaComponent implements OnInit {
  public cinema: Cinema;
  public sessions: Session[];

  constructor(private provider: ProviderService) { }

  ngOnInit() {
    this.cinema = this.provider.getCinemaForSession();
    this.provider.getSessionsByCinema(this.cinema).then(res => {
      this.sessions = res;
    });
  }

  getTimeOfSession(session: Session) {
    return moment(session.date).format('hh:mm');
  }
}
