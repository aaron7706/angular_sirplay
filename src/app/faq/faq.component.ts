import { Component, Input } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-faq',
  templateUrl:'./faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FAQComponent {
icon:any

changeicons(ids){

  
  this.icon=ids
}

@Input() title: string;
  isOpen: boolean = false;

  toggleAccordion() {
    this.isOpen = !this.isOpen;
  }
  constructor(private titleService: Title,
    private meta: Meta) {
      this.titleService.setTitle('VRNL FAQ – Your Guide to Common Questions and Answers');
      this.meta.addTag({name:'description',content:"Gain a deeper understanding of our online casino, betting platform, white-label casino, iframe, and API services by exploring our comprehensive FAQ section. "});
      this.meta.addTag({name:'keyword',content:'Online Casino platform, white label betting platform , White label casino,eSports betting software,Sports Betting Software,Live Casino'});
  }

}
