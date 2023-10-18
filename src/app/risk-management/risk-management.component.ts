import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-risk-management',
  templateUrl: './risk-management.component.html',
  styleUrls: ['./risk-management.component.css']
})
export class RiskManagementComponent {
  constructor(private titleService: Title) {
  }
  
  typingElement: any;
  typeArray: string[] = ["Your Bets", "Data Security"];
  index = 0;
  isAdding = true;
  typeIndex = 0;
  i: number = 0;
  private intervalId: any;

  ngOnInit() {
    this.typingElement = document.querySelector(".typing-text");
    this.playAnim();
    this.intervalId = setInterval(() => {
     
    }, 10);
    //  this.updateBackgroundPosition();
   
      this.titleService.setTitle('Risk Management Strategies for Sportsbook Operators - White label sports betting software and casino ');
    
  }
  playAnim() {
    setTimeout(() => {
      this.typingElement.innerText = this.typeArray[this.typeIndex].slice(0, this.index);

      if (this.isAdding) {
        if (this.index >= this.typeArray[this.typeIndex].length) {
          this.isAdding = false;
          setTimeout(() => {
            this.playAnim();
          }, 2000);
          return;
        } else {
          this.index++;
        }
      } else {
        if (this.index === 0) {
          this.isAdding = true;
          this.typeIndex++;
          if (this.typeIndex >= this.typeArray.length) {
            this.typeIndex = 0;
          }
        } else {
          this.index--;
        }
      }
      this.playAnim();
    }, this.isAdding ? 120 : 60);
  }

  // ngOnDestroy() {
  //   clearInterval(this.intervalId);
  // }

  // private updateBackgroundPosition() {
  //   this.i++;
  //   const animateArea = document.getElementById('animate-area');
  //   if (animateArea) {
  //     animateArea.style.backgroundPosition = this.i + 'px';
  //   }
  // }
  scrollToContact() {
    const contactElement = document.querySelector('#contact'); // Use the ID of the target element
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}




