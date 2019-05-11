import {Component, OnInit} from '@angular/core';
import {ProviderService} from '../../services/provider.service';
import {Movie} from '../../models/movie';
import {Session} from '../../models/cinema';
import * as moment from 'moment';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})
export class SessionsComponent implements OnInit {
  public movie: Movie;
  public sessions: Session[];
  constructor(private provider: ProviderService, private router: Router) { }

  ngOnInit() {
    this.movie = this.provider.getMovieForSession();
    if ( this.movie === undefined) {
      this.movie = JSON.parse(localStorage.getItem('movieForSession'));
      if (this.movie === null) {
        this.router.navigateByUrl('').then( res => {
          alert('Please choose movie to see sessions!');
        });
      }
    }
    this.provider.getSessions(this.movie).then(res => {
        this.sessions = res;
    });

  }

  getStatusOfSession(session: Session) {
    if (session.status === 'F') {
      return  'Будет';
    }
    if (session.status === 'P') {
      return  'Прошел';
    }
    if (session.status === 'C') {
      return  'Идет';
    }
  }

  getTimeOfSession(session: Session) {
    return moment(session.date).format('hh:mm');
  }

  buyLink(session: Session) {
      this.provider.setSessionForReserve(session);
  }
}
