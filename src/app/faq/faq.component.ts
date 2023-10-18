import { Component, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

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
  constructor(private titleService: Title) {
  }
  ngOnInit() {
    this.titleService.setTitle('FAQs: Your Questions Answered');
  }
}
