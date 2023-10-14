import { Component } from '@angular/core';

@Component({
  selector: 'app-sportbet',
  templateUrl:'./sportbet.component.html',
  styleUrls: ['./sportbet.component.css']
})
export class SportbetComponent {
  scrollToContact() {
    const contactElement = document.querySelector('#contact'); 
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
  accordian = false; 
toggleAccordion() {
    this.accordian = !this.accordian; 
  }
}
