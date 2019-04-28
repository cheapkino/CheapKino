import { Component, OnInit } from '@angular/core';
import {Cinema} from '../../models/cinema';
import {ProviderService} from '../../services/provider.service';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})
export class CinemaComponent implements OnInit {
  cinemas: Cinema[];
  constructor(private provider: ProviderService) { }

  ngOnInit() {
      this.provider.getCinemas().then( res => {
        this.cinemas = res;
      });
  }

  setCinemaForSessions(cinema: Cinema) {
    this.provider.setCinemaForSession(cinema);
  }
}
