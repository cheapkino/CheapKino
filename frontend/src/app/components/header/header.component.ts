import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }


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
      const signUp = document.getElementById('signUp');
      const signUp1 = document.getElementById('signUpMobile');
      const modal = document.getElementById('modal');
      const mobileNav2 = document.getElementById('nav-mobile');
      const hideModal = (event) => {
        if (event.target === document.getElementById('modal') || event.target === document.getElementById('exit')) {
          modal.style.display = 'none';
        }
      }
      hm.addEventListener('click', showMenu);
      signUp.addEventListener('click', () => {
        modal.style.display = 'flex';
      });
      signUp1.addEventListener('click', () => {
        modal.style.display = 'flex';
        mobileNav2.style.display = 'none';
      });



  }

}
