import {Component, OnInit} from '@angular/core';
import {ProviderService} from '../../services/provider.service';
import {Movie} from '../../models/movie';
import {Session} from '../../models/cinema';
import * as moment from 'moment';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})
export class SessionsComponent implements OnInit {
  public movie: Movie;
  public sessions: Session[];
  constructor(private provider: ProviderService) { }

  ngOnInit() {
    this.movie = this.provider.getMovieForSession();
    this.provider.getSessions(this.movie).then(res => {
        this.sessions = res;
    });

  }

  getTimeOfSession(session: Session) {
    return moment(session.date).format('hh:mm');
  }

}
