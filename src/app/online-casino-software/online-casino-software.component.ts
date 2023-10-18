import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-online-casino-software',
  templateUrl: './online-casino-software.component.html',
  styleUrls: ['./online-casino-software.component.css']
})
export class OnlineCasinoSoftwareComponent {
  constructor(private titleService: Title){}
  ngOnInit() {
    this.titleService.setTitle('Online Casino Software - Platform with thousands of casino games');
  }
}
