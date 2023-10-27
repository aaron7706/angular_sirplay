import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

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
  constructor(private titleService: Title) {
  }
  ngOnInit() {
    this.titleService.setTitle('Enhance Your Betting Experience with VRNL Sports Betting Software');
  }

}
