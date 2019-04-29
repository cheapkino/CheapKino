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
    this.router.navigateByUrl('');
  }

  login() {
    if (this.username === '' || this.password === '') {
      alert('Заполните все поля!');
    } else {
        this.provider.login(this.username, this.password).then( res => {
            localStorage.setItem('token', res.token);
            this.provider.logged = true;
        });
    }
  }
}
