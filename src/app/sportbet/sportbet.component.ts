import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-sportbet',
  templateUrl:'./sportbet.component.html',
  styleUrls: ['./sportbet.component.css']
})
export class SportbetComponent {
  constructor(private titleService: Title,
    private meta: Meta) {
      this.titleService.setTitle('Enhance Your Betting Experience with VRNL Sports Betting Software');
      this.meta.addTag({name:'description',content:" sport betting software for bookmakers &amp lotteries Delivering excellence in regulated online"});
      this.meta.addTag({name:'keyword',content:' Sports betting software,White label casino, white label betting platform , onlne casino'});
  }
  
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

  ngOnInit() {
  }

}
