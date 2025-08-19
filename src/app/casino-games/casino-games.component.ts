import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-casino-games',
  templateUrl: './casino-games.component.html',
  styleUrls: ['./casino-games.component.css']
})
export class CasinoGamesComponent {

  constructor( private meta: Meta) {
    // this.titleService.setTitle('Casino games - White label Casino');
    this.meta.addTag({ name: 'description', content: 'Play your favorite casino games online in immersive virtual reality for a truly immersive casino experience.' });
    this.meta.addTag({ name: 'keyword', content: 'online casino, casino game , casino' });
  }
}
