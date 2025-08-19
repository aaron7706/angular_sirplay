import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  counter: number = 0;


  typingElement: any;
  typeArray: string[] = [];
  index = 0;
  isAdding = true;
  typeIndex = 0;
  i: number = 0;
  private intervalId: any;
  private timeoutId: any;

  constructor(private translate: TranslateService) { }

  ngOnInit() {
    this.typingElement = document.querySelector(".typing-text");
    // Load translations initially
    this.loadTypeArray();
    // Reload translations whenever language changes
    this.translate.onLangChange.subscribe(() => {
      this.loadTypeArray();
    });

    const storedCounter = localStorage.getItem('counter');
    if (storedCounter) {
      this.counter = parseInt(storedCounter, 10);
    } else {
      this.counter = 0;
    }

    this.incrementCounter();
  }
  loadTypeArray() {
    this.translate.get(['who_we_are', 'what_we_do']).subscribe(translations => {
      this.typeArray = [
        translations['who_we_are'],
        translations['what_we_do']
      ];
      // Restart typing animation
      this.index = 0;
      this.typeIndex = 0;
      this.isAdding = true;
      // Stop old animation loop completely
      if (this.intervalId) clearInterval(this.intervalId);
      if (this.timeoutId) clearTimeout(this.timeoutId);
      this.playAnim();
    });
  }
  playAnim() {
    this.intervalId = setInterval(() => {
      if (!this.typeArray.length) return;

      this.typingElement.innerText = this.typeArray[this.typeIndex].slice(0, this.index);

      if (this.isAdding) {
        if (this.index >= this.typeArray[this.typeIndex].length) {
          this.isAdding = false;

          // Pause before deleting
          clearInterval(this.intervalId);
          this.timeoutId = setTimeout(() => {
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
    }, this.isAdding ? 120 : 60);
  }


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
