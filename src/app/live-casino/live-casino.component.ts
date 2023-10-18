import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-live-casino',
  templateUrl: './live-casino.component.html',
  styleUrls: ['./live-casino.component.css']
})
export class LiveCasinoComponent {
  constructor(private titleService: Title){}
  ngOnInit() {
    this.titleService.setTitle('Live Casino - White label Casino');
  }
}
