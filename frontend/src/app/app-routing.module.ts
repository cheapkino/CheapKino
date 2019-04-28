import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent} from './components/main/main.component';
import {MovieDetailedComponent} from './components/movie-detailed/movie-detailed.component';
import {MovieListComponent} from './components/movie-list/movie-list.component';
import {SessionsComponent} from './components/sessions/sessions.component';
import {CinemaComponent} from './components/cinema/cinema.component';
import {SessionsByCinemaComponent} from './components/sessions-by-cinema/sessions-by-cinema.component';


const routes: Routes = [
  { path: '' ,
    component: MainComponent,
    children: [
      {
        path: 'movieDetail',
        component: MovieDetailedComponent
      },
      {
        path: '',
        component: MovieListComponent
      },
      {
        path: 'movieSessions',
        component: SessionsComponent
      },
      {
        path: 'cinemas',
        component: CinemaComponent
      },
      {
        path: 'sessionsForCinema',
        component: SessionsByCinemaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule {

}
