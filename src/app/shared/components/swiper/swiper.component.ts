import { AfterViewInit, Component } from '@angular/core';
import Swiper from 'swiper';
import { register } from 'swiper/element/bundle';
import { Navigation } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrl: './swiper.component.scss',
})
export class SwiperComponent implements AfterViewInit {
  swiperEl: any;
  constructor() {
    register();
  }
  ngAfterViewInit(): void {
    this.initialize();
  }
  initialize() {
    setTimeout(() => {
      // swiper element
      this.swiperEl = document.getElementById('swiper_review');
      const swiperParams: SwiperOptions = {
        modules: [Navigation],
        zoom: true,
        autoHeight: true,
        direction: 'horizontal',
        slidesPerView: 5,
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
        freeMode: {
          enabled: true,
          minimumVelocity: 100,
        },
        grid: {
          fill: 'row',
          rows: 1,
        },
        on: {
          slideChange: (row) => {},
        },
      };

      Object.assign(this.swiperEl, swiperParams);

      // and now initialize it
      this.swiperEl.initialize();
    }, 100);
  }
  number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
}
