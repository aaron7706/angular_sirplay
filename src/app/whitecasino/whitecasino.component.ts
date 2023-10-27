import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-whitecasino',
  templateUrl: './whitecasino.component.html',
  styleUrls: ['./whitecasino.component.css']
})
export class WhitecasinoComponent {
  constructor(private titleService: Title,
    private meta: Meta) {
      this.titleService.setTitle('Starting your own white label online casino entails a series of essential steps to establish and operate your casino successfully');
      this.meta.addTag({name:'description',content:"VRNL is Your trusted partner for Online Casino platform  and White Label casino services. Explore our premium solutions and boost your online gaming business today. "});
      this.meta.addTag({name:'keyword',content:'Online Casino platform, white label betting platform , White label casino'});
  }
  ngOnInit() {
    this.titleService.setTitle('');
  }

}
