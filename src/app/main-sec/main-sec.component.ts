import { Component, ElementRef, OnInit, ViewChild, AfterViewInit, Renderer2 } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-main-sec',
  templateUrl: './main-sec.component.html',
  styleUrls: ['./main-sec.component.css']
})
export class MainSecComponent implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2,
    private meta: Meta, private translate: TranslateService) {
    // this.titleService.setTitle('Vrnl is Top Sports Betting Software Provider in Bangladesh.');
    // this.meta.addTag({name:'description',content:" your top choice with vrnl for white label sports betting and online casino solutions in India and Bangladesh"});
    this.meta.addTag({ name: 'keyword', content: ' white label sports betting, White label casino, white label betting platform , onlne casino' });
  }

  typingElement: any;
  typeArray: string[] = [];
  index = 0;
  isAdding = true;
  typeIndex = 0;
  i: number = 0;
  private intervalId: any;
  private timeoutId: any;

  videoElement: HTMLVideoElement | undefined;
  onVideoLoad(video: HTMLVideoElement): void {
    this.videoElement = video;
    this.setupIntersectionObserver();
  }

  setupIntersectionObserver(): void {
    const options = {
      root: null, // use the viewport as the root
      rootMargin: '0px',
      threshold: 0.5 // trigger when 50% of the video is visible
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.videoElement?.play();
        } else {
          this.videoElement?.pause();
        }
      });
    }, options);
    observer.observe(this.videoElement as Element);
  }

  ngOnInit() {
    this.typingElement = document.querySelector(".typing-text");
    // Load translations initially
    this.loadTypeArray();
    // Reload translations whenever language changes
    this.translate.onLangChange.subscribe(() => {
      // this.setTranslatedTitle();
      this.loadTypeArray();
    });
  }

  loadTypeArray() {
    this.translate.get(['Betting', 'B2C', 'Casino']).subscribe(translations => {
      this.typeArray = [
        translations['Betting'],
        translations['B2C'],
        translations['Casino']
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

  ngAfterViewInit() {
    const lazyLoadImages = document.querySelectorAll(".lazy-load-image");

    const lazyLoadOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
    };


  }
}


