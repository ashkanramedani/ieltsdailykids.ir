import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
// import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
// import { NbAccessChecker } from '@nebular/security';
import { NbThemeService } from '@nebular/theme';
import { OpenPagesIdpService } from '../../../idp/services/open-page-idp.service';
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

  themes = ['dark', 'default', 'cosmic', 'corporate', 'kid-theme'];
  //   private authService: NbAuthService,
  // public accessChecker: NbAccessChecker,
  constructor(
    private router: Router,
    private themeService: NbThemeService,
    private _openPagesIdpService: OpenPagesIdpService
  ) {
    this.currentTheme.setValue(this.themeService.currentTheme);
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
