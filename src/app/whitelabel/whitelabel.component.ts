import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-whitelabel',
  templateUrl:'./whitelabel.component.html',
  styleUrls: ['./whitelabel.component.css']
})
export class WhitelabelComponent {
  constructor(private titleService: Title,
    private meta: Meta) {
      // this.titleService.setTitle('Vrnl Your personalized white label sportsbook software provider');
      this.meta.addTag({name:'description',content:"vrnl your dedicated white label sportsbook software provider, offering customized solutions to meet your specific needs and requirements."});
      this.meta.addTag({name:'keyword',content:'sportbook software provider, white label exchange solution, white label betting platform , white label betting exchange'});
  }

}
