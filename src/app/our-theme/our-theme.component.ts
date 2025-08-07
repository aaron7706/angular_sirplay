import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-our-theme',
  templateUrl: './our-theme.component.html',
  styleUrls: ['./our-theme.component.css']
})
export class OurThemeComponent {
  selectedDemoUrl: string = '';

  cards = [
    { name: 'Skyexch', img: 'assets/skylogo.png', url: 'https://skyexch.vrnlexch.com/' },
    { name: 'Velki', img: 'assets/velkilogo.webp', url: 'https://velki.vrnlexch.com/' },
    { name: 'Babu365', img: 'assets/Babu365.png', url: 'https://babu365.vrnlexch.com/#/' },
    { name: 'Cxwelcome', img: 'assets/cxlogo.webp', url: 'https://www.cxwelcome.live' },
    { name: 'mostvipgame', img: 'assets/mostvipgame-logo.webp', url: 'https://mostvipgame.vrnlexch.com/m/#/' },
    { name: '9bazi', img: 'assets/logo-bazi.webp', url: 'https://9bazi.vrnlexch.com/' },
    { name: 'Aura444', img: 'assets/aura.webp', url: 'https://aura.vrnlexch.com/' },
    { name: 'Diamond', img: 'assets/diamond.png', url: 'http://www.diamond.vrnlexch.com/' },
    { name: 'Lotus', img: 'assets/lotus.webp', url: 'https://lotus.vrnlexch.com/' },
    { name: 'World777', img: 'assets/world7777.webp', url: 'https://world777.vrnlexch.com/' },
    { name: 'Baji', img: 'assets/baji.webp', url: 'https://baji.vrnlexch.com/#/' },
     { name: 'Winbd', img: 'assets/winbd.webp', url: 'https://winbd.vrnlexch.com/#/home' }
  ];

  isDemoVisible = false;

  openDemoModal(url: string): void {
    this.selectedDemoUrl = url;
    this.isDemoVisible = true;
  }
  closeDemoModal() {
    this.isDemoVisible = false;
  }
  constructor(private titleService: Title) {
  }
  ngOnInit() {
    this.titleService.setTitle('Bet & Win: Our Work in the World of Online Betting and Casinos');
  }

}