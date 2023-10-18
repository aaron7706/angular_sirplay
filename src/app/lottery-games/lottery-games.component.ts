import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-lottery-games',
  templateUrl: './lottery-games.component.html',
  styleUrls: ['./lottery-games.component.css']
})
export class LotteryGamesComponent {
  constructor(private titleService: Title){}
  ngOnInit() {
    this.titleService.setTitle('Lottery Games - White label Casino');
  }
}
