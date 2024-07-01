import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
// import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
// import { NbAccessChecker } from '@nebular/security';
import { NbMenuItem, NbMenuService, NbThemeService } from '@nebular/theme';
import { OpenPagesIdpService } from '../../../idp/services/open-page-idp.service';
import { filter, map } from 'rxjs';
// import { NbIsGrantedDirective } from '@nebular/security';

@Component({
  selector: 'app-custom-header',
  templateUrl: './custom-header.component.html',
  styleUrls: ['./custom-header.component.scss'],
})
export class CustomHeaderComponent implements OnInit {
  user = {
    name: 'Prueba nebular',
  };

  currentTheme = new FormControl('');

  items = [{ title: 'Profile' }, { title: 'Logout' }];
  items1 = [
    { title: 'کارگاه', link: 'work-shop' },
    { title: 'cours', link: 'cours' },
    { title: 'cours-english', link: 'cours-english' },
    { title: 'cours-french', link: 'cours-french' },
    { title: 'french', link: 'french' },
    { title: 'class', link: 'class' },
    { title: 'placement', link: 'placement' },
    { title: 'questions', link: 'questions' },
    { title: 'registration', link: 'registration' },
    { title: 'padcast', link: 'padcast' },
  ];
  themes = ['dark', 'default', 'cosmic', 'corporate', 'kid-theme'];
  //   private authService: NbAuthService,
  // public accessChecker: NbAccessChecker cours-french,
  constructor(
    private router: Router,
    private themeService: NbThemeService,
    private _openPagesIdpService: OpenPagesIdpService,
    private nbMenuService: NbMenuService
  ) {
    this.currentTheme.setValue(this.themeService.currentTheme);
    this.nbMenuService
      .onItemClick()
      .pipe(filter(({ tag }) => tag === 'my-context-menu'))
      .subscribe((item) => {
        this.router.navigate([item.item.link]);
      });
  }

  ngOnInit(): void {
    this.themeService.onThemeChange().subscribe((res) => {
      console.log('el tema ha cambiado', res);
    });
  }

  logout(): void {
    // this.authService.logout('email').subscribe(res => {
    //   res.isSuccess() && this.router.navigate(['/auth']);
    // });
  }

  changeTheme(theme: string): void {
    this.themeService.changeTheme(theme);
  }
  show() {
    this._openPagesIdpService.showSignupPage();
  }
}
