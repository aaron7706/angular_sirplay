import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vrnl';
  constructor(private titleService: Title){}

  i: number = 0;
  private intervalId: any;
  onActivate(event: any){
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
});
  }

  ngOnInit() {
  
    this.intervalId = setInterval(() => {
    this.updateBackgroundPosition();
    }, 10);
    
  }
  scrollToContact() {
    const contactElement = document.querySelector('#contact'); // Use the ID of the target element
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
   updateBackgroundPosition() {
    this.i++;
    const animateArea = document.getElementById('animate-area');
    if (animateArea) {
      animateArea.style.backgroundPosition = this.i + 'px';
    }
  }
  ngOnDestroy() {
    // Reset the title when the component is destroyed
    this.titleService.setTitle('VRNL is the best sports online betting whitelabel provider in India and Bangladesh | Betfair Api provider |Casino provider');
  }
}
