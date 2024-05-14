import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { remainingTime } from '@persian-tools/persian-tools';

export enum SignuEnum {
  EnterMobile = 'mobile',
  EnterCode = 'code',
}
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(public router$: Router) {}
  @Input() submitButtonId?: string = 'submit-button';

  @Input() model: any = { name: '', mobile: '09910311388' };
  @Output() submitCallback = new EventEmitter<any>();
  signuEnum = SignuEnum;
  stepForm: string = 'mobile';
  otpTimer = 0;
  otpTimerTextAction$ = new BehaviorSubject('00:00');
  expireSecound = 1800;
  otpIntervalId: any;
  final: boolean = false;
  isStart: boolean = true;
  submitHandler(companyForm: any) {
    this.submitCallback.emit(this.model);
  }
  ngOnInit(): void {
    this.isStart = true;
    setTimeout(() => {
      this.isStart = false;
    }, 5000);
    this.stepForm = this.signuEnum.EnterMobile;
  }
  runForm_otp() {
    this.stepForm = this.signuEnum.EnterCode;
    this.otpTimer = Date.now() + 3 * this.expireSecound * 1000;
    this.otpTimerTextAction$.next('03:00');
    const numFormat = new Intl.NumberFormat('en', {
      minimumIntegerDigits: 2,
      maximumFractionDigits: 0,
      minimumFractionDigits: 0,
    });
    clearInterval(this.otpIntervalId);
    this.otpIntervalId = setInterval(() => {
      const { years, months, days, hours, minutes, seconds, isFinished } =
        remainingTime(this.otpTimer);
      if (isFinished) {
        this.otpTimer = 0;
        clearInterval(this.otpIntervalId);
      }
      this.otpTimerTextAction$.next(
        `${numFormat.format(minutes)}:${numFormat.format(seconds)}`
      );
    }, 1000);
  }
  sendCode() {
    this.final = true;
  }
  signup() {}
}
