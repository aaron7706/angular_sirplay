import { Component, Input } from '@angular/core';

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
  
}
