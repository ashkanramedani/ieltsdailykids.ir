import { AfterViewInit, Component } from '@angular/core';
import { SelectOptionInterface } from '../../shared/interfaces/select-option.interface';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
})
export class RegistrationComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
  ageOptions?: SelectOptionInterface<any>[];
}
