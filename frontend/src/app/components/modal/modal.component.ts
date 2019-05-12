import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ProviderService} from '../../services/provider.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  public username: string;
  public password: string;
  public passwordAgain: string;
  constructor(private router: Router, private provider: ProviderService) { }

  ngOnInit() {

  }

  hideModal = () => {
   this.router.navigateByUrl('');
  }

  signUp() {
    if (this.username === '' || this.password === '' || this.passwordAgain === '') {
      alert('Заполните все поля!');
    } else {
      if ( this.password !== this.passwordAgain) {
        alert('Пароли не совпадают!');
      } else {
          this.provider.createUser(this.username, this.password).then( res => {
              alert('Вы успешно зарегистрированы!' + ' Ваш логин: ' + res.username);
              this.provider.login(this.username, this.password).then( res => {
                localStorage.setItem('token', res.token);
                this.provider.logged = true;
                this.router.navigateByUrl('').then();
              });
          });
      }
    }
  }

}
