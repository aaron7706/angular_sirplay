import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular'; 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { MainSecComponent } from './main-sec/main-sec.component';
import { FooterComponent } from './footer/footer.component';
import { OnlineSportsbookComponent } from './online-sportsbook/online-sportsbook.component';
import { OnlineCasinoSoftwareComponent } from './online-casino-software/online-casino-software.component';
import { Header2Component } from './header2/header2.component';
import { LiveCasinoComponent } from './live-casino/live-casino.component';
import { Footers2Component } from './footers2/footers2.component';
import { CasinoGamesComponent } from './casino-games/casino-games.component';
import { LotteryGamesComponent } from './lottery-games/lottery-games.component';
import { CasinoTournamentComponent } from './casino-tournament/casino-tournament.component';
import { WhitelabelComponent } from './whitelabel/whitelabel.component';
import { WhitecasinoComponent } from './whitecasino/whitecasino.component';
import { ContactComponent } from './contact/contact.component';


import { IFrameComponent } from './i-frame/i-frame.component';

import { Header3Component } from './header3/header3.component';
import { SportbetComponent } from './sportbet/sportbet.component';

import { EsportComponent } from './esport/esport.component';
import { MobileComponent } from './mobile/mobile.component';
import { AboutComponent } from './about/about.component';
import { ContactComComponent } from './contact-com/contact-com.component';
import { FormsModule } from '@angular/forms';
import { ContactComponent2Component } from './contact-component2/contact-component2.component';
import { FAQComponent } from './faq/faq.component';
import { ScrollBtnComponent } from './scroll-btn/scroll-btn.component';
import { OurThemeComponent } from './our-theme/our-theme.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainSecComponent,
    FooterComponent,
    OnlineSportsbookComponent,
    OnlineCasinoSoftwareComponent,
    Header2Component,
    LiveCasinoComponent,
    Footers2Component,
    CasinoGamesComponent,
    LotteryGamesComponent,
    CasinoTournamentComponent,
    WhitelabelComponent,
    WhitecasinoComponent,
    ContactComponent,

 
    IFrameComponent,

    Header3Component,
    SportbetComponent,
 
    EsportComponent,
    MobileComponent,
    AboutComponent,
    ContactComComponent,
    ContactComponent2Component,
    FAQComponent,
    ScrollBtnComponent,
    OurThemeComponent,
    PrivacyPolicyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    IonicModule,
    FormsModule,


  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
