import { Component , OnInit  } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-main-sec',
  templateUrl: './main-sec.component.html',
  styleUrls: ['./main-sec.component.css']
})
export class MainSecComponent implements OnInit {


  typingElement: any;
  typeArray: string[] = ["Betting", "B2C", "Casino"];
  index = 0;
  isAdding = true;
  typeIndex = 0;
  i: number = 0;
  private intervalId: any;

  ngOnInit() {
    this.typingElement = document.querySelector(".typing-text");
    this.playAnim();
    this.intervalId = setInterval(() => {
      this.updateBackgroundPosition();
    }, 10);
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

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  private updateBackgroundPosition() {
    this.i++;
    const animateArea = document.getElementById('animate-area');
    if (animateArea) {
      animateArea.style.backgroundPosition = this.i + 'px';
    }
  }

}
