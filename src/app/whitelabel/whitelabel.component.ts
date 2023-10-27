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
      this.titleService.setTitle('White label sports betting software with an integrated online casino');
      this.meta.addTag({name:'description',content:"Discover vrnl for Your Premier Destination for White Label Exchange Solutions, Customizations, and Exceptional Odds. "});
      this.meta.addTag({name:'keyword',content:'white label exchange solution, white label betting platform , white label betting exchange'});
  }

}
