import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-risk-management',
  templateUrl: './risk-management.component.html',
  styleUrls: ['./risk-management.component.css']
})
export class RiskManagementComponent {
  constructor(private titleService: Title,private translate: TranslateService) {
  }
  
  typingElement: any;
  typeArray: string[] = [];
  index = 0;
  isAdding = true;
  typeIndex = 0;
  i: number = 0;
  private intervalId: any;
  private timeoutId: any;


  ngOnInit() {
     this.typingElement = document.querySelector(".typing-text");
    // Load translations initially
    this.loadTypeArray();
    // Reload translations whenever language changes
    this.translate.onLangChange.subscribe(() => {
      this.loadTypeArray();
    });

  }
  loadTypeArray() {
    this.translate.get(['data_security']).subscribe(translations => {
      this.typeArray = [
        translations['data_security']
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


  scrollToContact() {
    const contactElement = document.querySelector('#contact'); // Use the ID of the target element
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}




