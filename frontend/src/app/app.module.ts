import { BrowserModule } from '@angular/platform-browser';
import {ClassProvider, NgModule} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { MovieComponent } from './components/movie/movie.component';
import {ProviderService} from './services/provider.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { MovieDetailedComponent } from './components/movie-detailed/movie-detailed.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { SessionsComponent } from './components/sessions/sessions.component';
import { CinemaComponent } from './components/cinema/cinema.component';
import { SessionsByCinemaComponent } from './components/sessions-by-cinema/sessions-by-cinema.component';
import { ModalComponent } from './components/modal/modal.component';
import {FormsModule} from '@angular/forms';
import {AuthInterceptor} from './AuthInterceptor';
import { PlacesComponent } from './components/places/places.component';
import { CinemaAdminComponent } from './components/cinema-admin/cinema-admin.component';
import { ReserveModalComponent } from './components/reserve-modal/reserve-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    MainComponent,
    MovieComponent,
    MovieDetailedComponent,
    MovieListComponent,
    SessionsComponent,
    CinemaComponent,
    SessionsByCinemaComponent,
    ModalComponent,
    PlacesComponent,
    CinemaAdminComponent,
    ReserveModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ProviderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    } as ClassProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
