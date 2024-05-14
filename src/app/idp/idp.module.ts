import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';
import { IntroComponent } from './pages/intro/intro.component';
import { IdpRoutingModule } from './idp-routing.module';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { SigningComponent } from './pages/signing/signing.component';
import { SignupComponent } from './pages/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import * as _template from './components/templates';
@NgModule({
  declarations: [
    SignupComponent,
    SigningComponent,
    LoginComponent,
    LayoutComponent,
    _template.LoginFormModalComponent,
    _template.SignupFormModalComponent,
  ],
  imports: [CommonModule, SharedModule, FormsModule, RouterModule],
  exports: [SignupComponent, SigningComponent, LoginComponent],
})
export class IdpModule {}
