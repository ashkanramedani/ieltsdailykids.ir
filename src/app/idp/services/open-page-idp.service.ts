import { Injectable } from '@angular/core';
import { ModalService } from '../../shared/services';
import { LoginComponent } from '../pages';
import {
  LoginFormModalComponent,
  SignupFormModalComponent,
} from '../components/templates';
@Injectable({
  providedIn: 'root',
})
export class OpenPagesIdpService {
  constructor(private modalService: ModalService) {}
  showLoginPage() {
    this.modalService.open(LoginFormModalComponent, 'lg').then((f) => {});
  }
  showSignupPage() {
    this.modalService.open(SignupFormModalComponent, 'lg').then((f) => {});
  }
}
