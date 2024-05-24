import { Component } from '@angular/core';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrl: './library.component.scss',
})
export class LibraryComponent {
  number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
}
