import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-btn',
  templateUrl: './scroll-btn.component.html',
  styleUrls: ['./scroll-btn.component.css']
})
export class ScrollBtnComponent {
  showScrollButton = false;
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  @HostListener('window:scroll', [])
onWindowScroll() {
  const scrollButton = document.querySelector('.scroll-button');
  if (scrollButton) {
    if (window.scrollY >= 200) {
      scrollButton.classList.remove('hidden');
    } else {
      scrollButton.classList.add('hidden');
    }
  }
}

}
