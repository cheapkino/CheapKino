import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ProviderService} from '../../services/provider.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private provider: ProviderService) { }
  @Input()
  public loggedIn;
  @Input()
  public isSuperUser;
  ngOnInit() {
      const hm = document.getElementById('hamburger');
      const mobileNav = document.getElementById('nav-mobile');
      let show = false;
      const showMenu = () => {
        show = !show;
        if (show) {
          mobileNav.style.display = 'flex';
        } else {
          mobileNav.style.display = 'none';
        }
      };
      hm.addEventListener('click', showMenu);
  }

  signUp() {
    this.router.navigateByUrl('Modal').then();
  }

  login() {
    this.router.navigateByUrl('Login').then();
  }

  logout() {
    this.provider.logout().then(res => {
      localStorage.removeItem('token');
      this.provider.logged = false;
      this.provider.isAdmin = false;
      this.router.navigateByUrl('').then();
    });
  }

  getUsername = () => {
    if (this.provider.logged) {
      return this.provider.username;
    } else {
      return '';
    }
  }
}
