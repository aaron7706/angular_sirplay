import { Component , HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isSticky: boolean = false;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 100) {
      this.isSticky = true;
    } else {
      this.isSticky = false;
    }
  }
}
