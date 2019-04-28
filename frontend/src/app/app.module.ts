import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { MainComponent } from './components/main/main.component';
import { MovieComponent } from './components/movie/movie.component';
import {ProviderService} from './services/provider.service';
import {HttpClientModule} from '@angular/common/http';
import { MovieDetailedComponent } from './components/movie-detailed/movie-detailed.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { SessionsComponent } from './components/sessions/sessions.component';
import { CinemaComponent } from './components/cinema/cinema.component';
import { SessionsByCinemaComponent } from './components/sessions-by-cinema/sessions-by-cinema.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignUpComponent,
    MainComponent,
    MovieComponent,
    MovieDetailedComponent,
    MovieListComponent,
    SessionsComponent,
    CinemaComponent,
    SessionsByCinemaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ProviderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
