import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent} from './components/main/main.component';


const routes: Routes = [
  { path: '' ,
    component: MainComponent
    // children: [
    //   {
    //     path: 'movies',
    //     component: '',
    //   }
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule {

}
