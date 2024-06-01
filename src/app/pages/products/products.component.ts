import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
}
