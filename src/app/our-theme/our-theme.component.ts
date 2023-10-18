import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-our-theme',
  templateUrl: './our-theme.component.html',
  styleUrls: ['./our-theme.component.css']
})
export class OurThemeComponent {
  copyed: string | null = null;

  copytoclip(value: string) {
    if (this.copyed !== value) {
      const textToCopy = document.getElementById(value)?.textContent || '';
      navigator.clipboard.writeText(textToCopy).then(() => {
        this.copyed = value;
  
        setTimeout(() => {
          this.copyed = null;
        }, 3000);
      });
    }
  }
  constructor(private titleService: Title) {
  }
  ngOnInit() {
    this.titleService.setTitle('Bet & Win: Our Work in the World of Online Betting and Casinos');
  }
  
}