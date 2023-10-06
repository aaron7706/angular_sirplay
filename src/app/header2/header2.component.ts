import { Component , HostListener} from '@angular/core';

@Component({
  selector: 'app-header2',
  templateUrl:'./header2.component.html',
  styleUrls: ['./header2.component.css']
})
export class Header2Component {
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
