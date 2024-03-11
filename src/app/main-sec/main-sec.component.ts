import { Component , ElementRef, OnInit, ViewChild,AfterViewInit, Renderer2   } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import * as $ from 'jquery'

@Component({
  selector: 'app-main-sec',
  templateUrl: './main-sec.component.html',
  styleUrls: ['./main-sec.component.css']
})
export class MainSecComponent implements OnInit {

  constructor(private titleService: Title,private el: ElementRef, private renderer: Renderer2,
    private meta: Meta) 


 {
    this.titleService.setTitle('Vrnl is Top Sports Betting Software Provider in India and Bangladesh.');
    // this.meta.addTag({name:'description',content:" your top choice with vrnl for white label sports betting and online casino solutions in India and Bangladesh"});
    this.meta.addTag({name:'keyword',content:' white label sports betting, White label casino, white label betting platform , onlne casino'});
}

  typingElement: any;
  typeArray: string[] = ["Betting", "B2C", "Casino"];
  index = 0;
  isAdding = true;
  typeIndex = 0;
  i: number = 0;
  private intervalId: any;

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
    this.playAnim();
    this.intervalId = setInterval(() => {
     
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


