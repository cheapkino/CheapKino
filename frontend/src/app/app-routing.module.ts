import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent} from './components/main/main.component';
import {MovieDetailedComponent} from './components/movie-detailed/movie-detailed.component';
import {MovieListComponent} from './components/movie-list/movie-list.component';


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
