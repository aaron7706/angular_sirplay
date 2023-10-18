import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-whitecasino',
  templateUrl: './whitecasino.component.html',
  styleUrls: ['./whitecasino.component.css']
})
export class WhitecasinoComponent {
  constructor(private titleService: Title) {
  }
  ngOnInit() {
    this.titleService.setTitle('Starting your own white label online casino entails a series of essential steps to establish and operate your casino successfully');
  }

  ngOnDestroy() {
    // Reset the title when the component is destroyed
    this.titleService.setTitle('VRNL is the best sports online betting whitelabel provider in India and Bangladesh | Betfair Api provider |Casino provider');
  }
}
