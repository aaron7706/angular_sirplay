import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-lottery-games',
  templateUrl: './lottery-games.component.html',
  styleUrls: ['./lottery-games.component.css']
})
export class LotteryGamesComponent {

  constructor(private titleService: Title,
    private meta: Meta) {
      this.titleService.setTitle('Lottery Games - White label Casino');
      this.meta.addTag({name:'description',content:'Looking for a top-tier lottery and bingo platform? Look no further. We offer a diverse selection of captivating lottery and bingo games through our White Label Lottery and Bingo Solution. Play on your smartphone or computer for an exceptional user-friendly experience. Feel free to modify this content to your liking, but our commitment to top-notch gaming experiences remains constant.'});
      this.meta.addTag({name:'keyword',content:'lottery games , White Label'});
  }
}
