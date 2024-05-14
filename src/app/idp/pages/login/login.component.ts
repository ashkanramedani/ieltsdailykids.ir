import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(public router$: Router) {}
  @Input() submitButtonId?: string = 'submit-button';

  @Input() model: any = { name: '', pass: '' };
  @Output() submitCallback = new EventEmitter<any>();
  submitHandler(companyForm: any) {
    this.submitCallback.emit(this.model);
  }
  ngOnInit(): void {}
}
