import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vrnl';

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

}
