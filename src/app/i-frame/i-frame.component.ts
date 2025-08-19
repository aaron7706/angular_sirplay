import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-i-frame',
  templateUrl: './i-frame.component.html',
  styleUrls: ['./i-frame.component.css']
})
export class IFrameComponent {
  constructor(private titleService: Title) {
  }
  ngOnInit() {
    // this.titleService.setTitle('Sportsbook iFrame White label sports betting and Casino');
  }


}
