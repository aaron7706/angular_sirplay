import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent {
  constructor(private titleService: Title) {
  }
  ngOnInit() {
    this.titleService.setTitle('Mobile Sports Betting Software: Enhancing the Betting Experience');
  }
}
