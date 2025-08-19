// language.service.ts
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private langSubject = new BehaviorSubject<string>('en');
  lang$ = this.langSubject.asObservable();

  constructor(private translate: TranslateService) {
    this.initLanguage();
  }

  async initLanguage() {
    const savedLang = localStorage.getItem('lang');
    if (savedLang) {
      this.setLanguage(savedLang);
      return;
    }

    try {
      const res = await fetch('https://geolocation-db.com/json/');
      const data = await res.json();
      const countryCode = data.country_code;

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
        // 'IN': 'zh'
      };

      const detectedLang = countryLangMap[countryCode] || 'en';
      this.setLanguage(detectedLang);

    } catch (err) {
      console.error('Geolocation error', err);
      this.setLanguage('en');
    }
  }

  setLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
    this.langSubject.next(lang);
  }

  getCurrentLanguage(): string {
    return localStorage.getItem('lang') || 'en';
  }
}
