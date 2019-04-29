import {Component, OnInit, Provider} from '@angular/core';
import {Router} from '@angular/router';
import {ProviderService} from '../../services/provider.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private provider: ProviderService) { }


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

  getLoginStatus() {
    return this.provider.logged;
  }

  logout() {
    this.provider.logout().then(res => {
      localStorage.clear();
      this.provider.logged = false;
    });
  }
}
