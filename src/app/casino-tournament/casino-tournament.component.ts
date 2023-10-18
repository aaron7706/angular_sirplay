import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-casino-tournament',
  templateUrl: './casino-tournament.component.html',
  styleUrls: ['./casino-tournament.component.css']
})
export class CasinoTournamentComponent {
  constructor(private titleService: Title){}
  ngOnInit() {
    this.titleService.setTitle('Casino tournaments software - White label Casino online');
  }
}
