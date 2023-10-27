import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-casino-tournament',
  templateUrl: './casino-tournament.component.html',
  styleUrls: ['./casino-tournament.component.css']
})
export class CasinoTournamentComponent {

  constructor(private titleService: Title,
    private meta: Meta) {
      this.titleService.setTitle('Casino tournaments software - White label Casino online');
      this.meta.addTag({name:'description',content:'Experience thrilling online casino tournaments and the excitement of live casino action at VRNL.'});
      this.meta.addTag({name:'keyword',content:'  casino tournaments, tournaments'});
  }
}
