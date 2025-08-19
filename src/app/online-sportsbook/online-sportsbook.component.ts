import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-online-sportsbook',
  templateUrl: './online-sportsbook.component.html',
  styleUrls: ['./online-sportsbook.component.css']
})
export class OnlineSportsbookComponent implements OnInit {

  constructor(private translate: TranslateService) {
  }

  typingElement: any;
  typeArray: string[] = [];
  index = 0;
  isAdding = true;
  typeIndex = 0;
  private intervalId: any;
  private timeoutId: any;

  ngOnInit() {
    this.typingElement = document.querySelector(".typing-text");
    // Set initial translated title
    // this.setTranslatedTitle();
    // Load translations initially
    this.loadTypeArray();
    // Reload translations whenever language changes
    this.translate.onLangChange.subscribe(() => {
      // this.setTranslatedTitle();
      this.loadTypeArray();
    });
  }

  // private setTranslatedTitle() {
  //   this.translate.get('online_exch_sw_titles').subscribe(translatedTitle => {
  //     this.titleService.setTitle(translatedTitle);
  //   });
  // }

  loadTypeArray() {
    this.translate.get(['casino_providers', 'betting_providers', 'games_providers']).subscribe(translations => {
      this.typeArray = [
        translations['casino_providers'],
        translations['betting_providers'],
        translations['games_providers']
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
}
