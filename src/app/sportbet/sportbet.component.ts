import { Component } from '@angular/core';

@Component({
  selector: 'app-sportbet',
  templateUrl: './sportbet.component.html',
  styleUrls: ['./sportbet.component.css']
})
export class SportbetComponent {
  scrollToContact() {
    const contactElement = document.querySelector('#contact'); // Use the ID of the target element
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
}
