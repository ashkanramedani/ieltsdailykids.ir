import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header-home',
  templateUrl: './header-home.component.html',
  styleUrl: './header-home.component.scss',
})
export class HeaderHomeComponent implements OnInit {
  constructor(private renderer: Renderer2, private el: ElementRef) {}
  ngOnInit(): void {
    this.createStars();
  }

  createStars() {
    const starCount = 30; // تعداد ستاره‌ها
    const container = this.el.nativeElement.querySelector('.stars');

    for (let i = 0; i < starCount; i++) {
      const star = this.renderer.createElement('div');
      this.renderer.addClass(star, 'star');

      // اندازه تصادفی برای ستاره
      const size = Math.random() * 3 + 1; // بین 1 و 4 پیکسل
      if (Math.random() > 0.9) {
        this.renderer.addClass(star, 'large'); // 10% از ستاره‌ها بزرگ‌تر می‌شوند
      } else {
        this.renderer.setStyle(star, 'width', `${size}px`);
        this.renderer.setStyle(star, 'height', `${size}px`);
      }

      // موقعیت تصادفی برای ستاره
      const top = Math.random() * 100; // بین 0 و 100 درصد
      const left = Math.random() * 100; // بین 0 و 100 درصد
      this.renderer.setStyle(star, 'top', `${top}%`);
      this.renderer.setStyle(star, 'left', `${left}%`);

      // افزودن ستاره به کانتینر
      this.renderer.appendChild(container, star);
    }
  }
}
