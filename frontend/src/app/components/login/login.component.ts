import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ProviderService} from '../../services/provider.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  constructor(private  router: Router, private provider: ProviderService) { }

  ngOnInit() {
  }

  hideModal = () => {
    this.router.navigateByUrl('').then();
  }

  login() {
    if (this.username === '' || this.password === '') {
      alert('Заполните все поля!');
    } else {
        this.provider.login(this.username, this.password).then( res => {
            localStorage.setItem('token', res.token);
            this.provider.logged = true;
            this.provider.username = this.username;
            alert('Добро пожаловать!');
            this.router.navigateByUrl('');
        }).catch( res => {
            alert('You may mistyped your login or password. Try again!');
            this.username = '';
            this.password = '';
        });

    }
  }
}
