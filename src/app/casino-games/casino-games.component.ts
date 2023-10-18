import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-casino-games',
  templateUrl: './casino-games.component.html',
  styleUrls: ['./casino-games.component.css']
})
export class CasinoGamesComponent {
  constructor(private titleService: Title){}
  ngOnInit() {
    this.titleService.setTitle('Casino games - White label Casino');
  }
}
