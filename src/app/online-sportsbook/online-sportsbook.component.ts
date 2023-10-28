import { Component , OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-online-sportsbook',
  templateUrl: './online-sportsbook.component.html',
  styleUrls: ['./online-sportsbook.component.css']
})
export class OnlineSportsbookComponent implements OnInit  {

  constructor(private titleService: Title) {
  }
 
  typingElement: any;
  typeArray: string[] = ["Casino Providers", "Betting Providers", "Games Providers"];
  index = 0;
  isAdding = true;
  typeIndex = 0;

  ngOnInit() {
    this.typingElement = document.querySelector(".typing-text");
    this.playAnim();
   
      this.titleService.setTitle('Revolutionize Your Business with VRNL Online Exchange Software');

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
}
