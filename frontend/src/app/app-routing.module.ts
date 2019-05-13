import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent} from './components/main/main.component';
import {MovieDetailedComponent} from './components/movie-detailed/movie-detailed.component';
import {MovieListComponent} from './components/movie-list/movie-list.component';
import {SessionsComponent} from './components/sessions/sessions.component';
import {CinemaComponent} from './components/cinema/cinema.component';
import {SessionsByCinemaComponent} from './components/sessions-by-cinema/sessions-by-cinema.component';
import {ModalComponent} from './components/modal/modal.component';
import {LoginComponent} from './components/login/login.component';
import {PlacesComponent} from './components/places/places.component';
import {CinemaAdminComponent} from './components/cinema-admin/cinema-admin.component';
import {ReserveModalComponent} from './components/reserve-modal/reserve-modal.component';


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
      },
      {
        path: 'Modal',
        component: ModalComponent
      },
      {
        path: 'Login',
        component: LoginComponent
      },
      {
        path: 'places',
        component: PlacesComponent
      },
      {
        path: 'reserveSeat',
        component: ReserveModalComponent
      },
      {
        path: 'admin',
        component: CinemaAdminComponent
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
