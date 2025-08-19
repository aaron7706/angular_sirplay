import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-esport',
  templateUrl: './esport.component.html',
  styleUrls: ['./esport.component.css']
})
export class EsportComponent {
  constructor(private titleService: Title) {
  }
  ngOnInit() {
    // this.titleService.setTitle('eSports Betting Software enabling your users to wager on top eSports games');
  }
}
