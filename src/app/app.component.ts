import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs';
import { LanguageService } from './lang-service/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vrnl';
  constructor(private titleService: Title, private translate: TranslateService, private router: Router, private languageService: LanguageService) {
    translate.addLangs(['en', 'es', 'fr', 'ar', 'zu', 'pt', 'id', 'ms', 'fil', 'ko', 'zh', 'th', 'ga', 'nl',
      'bs', 'bg', 'hr', 'cs', 'da', 'et', 'fi', 'de', 'hu', 'is', 'it', 'lv', 'lt', 'lb', 'mk', 'mt', 'ro', 'sr', 'no', 'pl', 'sk', 'sv', 'uk', 'ru']);
    translate.setDefaultLang('en');

    // const browserLang = localStorage.getItem('lang') || translate.getBrowserLang();
    // translate.use(browserLang?.match(/en|es|fr/) ? browserLang : 'en');
  }
  private async detectLanguage() {
    const savedLang = localStorage.getItem('lang');
    if (savedLang) {
      this.translate.use(savedLang);
      return;
    }

    try {
      const res = await fetch('https://geolocation-db.com/json/');
      const data = await res.json();
      const countryCode = data.country_code; // ISO alpha-2 code

      // Map countries to languages
      const countryLangMap: { [key: string]: string } = {
        'US': 'en',
        'AE': 'ar',
        'ZA': 'zu',
        'ES': 'es',
        'PT': 'pt',
        'ID': 'id',
        'MY': 'ms',
        'PH': 'fil',
        'KR': 'ko',
        'CN': 'zh',
        'TH': 'th',
        'IE': 'ga',
        'NL': 'nl',
        'BA': 'bs',
        'BG': 'bg',
        'HR': 'hr',
        'CZ': 'cs',
        'DK': 'da',
        'EE': 'et',
        'FI': 'fi',
        'DE': 'de',
        'HU': 'hu',
        'IS': 'is',
        'IT': 'it',
        'LV': 'lv',
        'LT': 'lt',
        'LU': 'lb',
        'MK': 'mk',
        'MT': 'mt',
        'RO': 'ro',
        'ME': 'sr',
        'NO': 'no',
        'PL': 'pl',
        'SK': 'sk',
        'SE': 'sv',
        'UA': 'uk',
        'FR': 'fr',
        'RU': 'ru',
        'IN': 'zh'
      };

      const detectedLang = countryLangMap[countryCode] || 'en';
      this.translate.use(detectedLang);
      localStorage.setItem('lang', detectedLang);

    } catch (err) {
      console.error('Geolocation error', err);
      this.translate.use('en'); // fallback
    }
  }


  changeLang(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }

  i: number = 0;
  private intervalId: any;
  onActivate(event: any) {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  ngOnInit() {
    // this.detectLanguage();
    const pageTitles: { [key: string]: string } = {
      '/': 'main_sec_title',
      '/privacy-policy': 'main_sec_title',
      '/contact': 'main_sec_title',
      '/about-us': 'about_us_title',
      '/casino/casino-games': 'casino_games_title',
      '/online-exchangebook-software': 'online_exch_sw_title',
      '/sports-betting-software/esports-betting-software': 'esports_title',
      '/FAQ': 'faq_title',
      '/exchangebook-iframe': 'iframe_title',
      '/exchangebook-casino/live-casino': 'live_casino_title',
      '/casino/lottery-games': 'lottery_games_title',
      '/sports-betting-software/mobile-betting-software': 'mobile_title',
      '/online-casino-software': 'online_casino_sw_title',
      '/our-theme': 'ourTheme_title',
      '/risk-management': 'risk_management_title_main',
      '/sports-betting-software': 'sport_bet_title',
      '/casino': 'wlc_title',
      '/white-label-betting-platform': 'whiteLabel_title',
    };

    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        const path = event.urlAfterRedirects;
        const translationKey = pageTitles[path];
        if (translationKey) {
          this.translate.get(translationKey).subscribe(translatedTitle => {
            this.titleService.setTitle(translatedTitle);
          });
        }
      });

    this.languageService.lang$.subscribe(() => {
      const currentPath = this.router.url;
      const translationKey = pageTitles[currentPath];
      if (translationKey) {
        this.translate.get(translationKey).subscribe(translatedTitle => {
          this.titleService.setTitle(translatedTitle);
        });
      }
    });


    this.intervalId = setInterval(() => {
      this.updateBackgroundPosition();
    }, 10);

  }
  scrollToContact() {
    const contactElement = document.querySelector('#contact'); // Use the ID of the target element
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
  updateBackgroundPosition() {
    this.i++;
    const animateArea = document.getElementById('animate-area');
    if (animateArea) {
      animateArea.style.backgroundPosition = this.i + 'px';
    }
  }
  ngOnDestroy() {
    // Reset the title when the component is destroyed
    // this.titleService.setTitle('VRNL is the best sports betting software&nbsp;whitelabel provider in Bangladesh')
  }
}
