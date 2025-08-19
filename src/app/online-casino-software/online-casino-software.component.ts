import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-online-casino-software',
  templateUrl: './online-casino-software.component.html',
  styleUrls: ['./online-casino-software.component.css']
})
export class OnlineCasinoSoftwareComponent {
  constructor(private titleService: Title,
    private meta: Meta) {
    // this.titleService.setTitle('Online Casino Software - The Evolution of Online Casino Software & Platform Provider');
    this.meta.addTag({name:'description',content:'Explore the Future of Online Casinos with VRNL - Your Premier Source for Online Casino Software, Live Casino Software, Casino Platform Provider, and Seamless Iframe Solutions.  '});
      this.meta.addTag({name:'keyword',content:'Online Casino Software, casino Platform Provider, live casino software, casino'});
  }
}
 