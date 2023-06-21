import { Component ,OnInit } from '@angular/core';

@Component({
  selector: 'app-web3casino',
  templateUrl: './web3casino.component.html',
  styleUrls: ['./web3casino.component.css']
})
export class Web3casinoComponent implements OnInit {

  typingElement: any;
  typeArray: string[] = ["Casino" ," Live Casino" ,"Bingo" , "Lottery"];
  index = 0;
  isAdding = true;
  typeIndex = 0;

  ngOnInit() {
    this.typingElement = document.querySelector(".typing-text");
    this.playAnim();
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
