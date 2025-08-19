import { Component, ElementRef, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../lang-service/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public translate: TranslateService, private elRef: ElementRef, private languageService: LanguageService) {
    this.languageService.lang$.subscribe(lang => {
      this.currentLang = lang;
      this.setCurrentLangObj();
    });
  }
  currentLang = 'en';
  currentLangObj: { code: string; name: string; flag: string } | undefined;
  dropdownOpen = false;

  // Map language codes to language names
  langCodeToName: Record<string, string> = {
    en: "English",
    ar: "Arabic",
    // bn: "Bengali",
    zu: "Zulu",
    es: "Spanish",
    pt: "Portuguese",
    id: "Indonesian",
    ms: "Malay",
    fil: "Filipino",
    ko: "Korean",
    zh: "Mandarin",
    th: "Thai",
    ga: "Irish",
    nl: "Dutch",
    bs: "Bosnian",
    bg: "Bulgarian",
    hr: "Croatian",
    cs: "Czech",
    da: "Danish",
    et: "Estonian",
    fi: "Finnish",
    de: "German",
    hu: "Hungarian",
    is: "Icelandic",
    it: "Italian",
    lv: "Latvian",
    lt: "Lithuanian",
    lb: "Luxembourgish",
    mk: "Macedonian",
    mt: "Maltese",
    ro: "Romanian",
    sr: "Montenegrin",
    no: "Norwegian",
    pl: "Polish",
    sk: "Slovak",
    sv: "Swedish",
    uk: "Ukrainian",
    fr: "French",
    ru: "Russian"
  };

  // Generate from langCodeToName
  languages = Object.keys(this.langCodeToName).map(code => ({
    code,
    name: this.langCodeToName[code],
    flag: `assets/languageImage/${this.langCodeToName[code].replace(/\s+/g, '-')}.webp`
  })
  );

  ngOnInit() {
    this.currentLang = this.languageService.getCurrentLanguage();
    this.setCurrentLangObj();
  }

  setCurrentLangObj() {
    this.currentLangObj = this.languages.find(l => l.code === this.currentLang);
  }

  changeLangCode(code: string) {
    this.languageService.setLanguage(code);
    this.dropdownOpen = false;
  }

  isSticky: boolean = false;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 120) {
      this.isSticky = true;
    } else {
      this.isSticky = false;
    }
  }
  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
    if (this.dropdownOpen && !this.elRef.nativeElement.contains(event.target)) {
      this.dropdownOpen = false;
    }
  }
}
