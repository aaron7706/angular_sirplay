import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  counter: number = 0;


  typingElement: any;
  typeArray: string[] = ["who we are", "What we do"];
  index = 0;
  isAdding = true;
  typeIndex = 0;
  i: number = 0;
  private intervalId: any;

  ngOnInit() {
    this.typingElement = document.querySelector(".typing-text");
    // this.playAnim();
    this.playAnim();
    // this.intervalId = setInterval(() => {
    //   this.updateBackgroundPosition();
    // }, 10);
    const storedCounter = localStorage.getItem('counter');
    if (storedCounter) {
      this.counter = parseInt(storedCounter, 10);
    } else {
      this.counter = 0;
    }

    this.incrementCounter();
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

  // private updateBackgroundPosition() {
  //   this.i++;
  //   const animateArea = document.getElementById('animate-area');
  //   if (animateArea) {
  //     animateArea.style.backgroundPosition = this.i + 'px';
  //   }
  // }
  incrementCounter() {
    if (this.counter < 40) {
      this.counter++;
      localStorage.setItem('counter', this.counter.toString());
      setTimeout(() => {
        this.incrementCounter();
      }, 1000);
    }
  }
}
