import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-box-img-ply',
  templateUrl: './box-img-ply.component.html',
  styleUrl: './box-img-ply.component.scss',
})
export class BoxImgPlyComponent {
  @Input() src: string = '/assets/image/cours/rectangle-5665@2x.png';
}
