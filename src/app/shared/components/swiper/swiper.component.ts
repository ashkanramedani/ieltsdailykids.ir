import {
  AfterViewInit,
  Component,
  Input,
  TemplateRef,
  input,
} from '@angular/core';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrl: './swiper.component.scss',
})
export class SwiperComponent implements AfterViewInit {
  swiperEl: any;
  @Input() public dynamicTemplate: TemplateRef<any>;
  @Input() id: string = 'swiper_review';
  constructor() {}
  ngAfterViewInit(): void {
    this.initialize();
  }
  initialize() {
    setTimeout(() => {
      // swiper element
      this.swiperEl = document.getElementById(this.id);
      const swiperParams: SwiperOptions = {
        modules: [Navigation],
        zoom: true,
        autoHeight: true,
        direction: 'horizontal',
        slidesPerView: 4,
        loop: false,
        breakpoints: {
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        },

        spaceBetween: 40,
        // navigation: true,
        navigation: {
          enabled: true,
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        freeMode: true,
        on: {
          slideChange: (row) => {
            console.log('slideChange' + this.id);
          },
        },
      };

      Object.assign(this.swiperEl, swiperParams);

      // and now initialize it
      this.swiperEl.initialize();
    }, 100);
  }
  number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
}
