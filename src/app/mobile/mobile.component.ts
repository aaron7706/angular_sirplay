import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent {
  constructor(private titleService: Title,
    private meta: Meta) {
      this.titleService.setTitle("Uplift Your Game with VRNL's Mobile Sports Betting Software");
      this.meta.addTag({name:'description',content:"Experience the next level of sports betting with VRNL's Mobile Sports Betting Software. Enjoy seamless, real-time wagering on your favorite sports, whether you're a seasoned bettor or a newcomer."});
      this.meta.addTag({name:'keyword',content:'Mobile sports betting, Sports betting , White label casino'});
  }
}
