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
    this.titleService.setTitle('Optimize your sports betting experience with our software to increase your chances of success and maximize your winnings');
  }

}
