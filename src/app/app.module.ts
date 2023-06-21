import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { MainSecComponent } from './main-sec/main-sec.component';
import { FooterComponent } from './footer/footer.component';
import { DemoComponent } from './demo/demo.component';
import { OnlineSportsbookComponent } from './online-sportsbook/online-sportsbook.component';
import { OnlineCasinoSoftwareComponent } from './online-casino-software/online-casino-software.component';
import { Header2Component } from './header2/header2.component';
import { LiveCasinoComponent } from './live-casino/live-casino.component';
import { Footers2Component } from './footers2/footers2.component';
import { CasinoGamesComponent } from './casino-games/casino-games.component';
import { LotteryGamesComponent } from './lottery-games/lottery-games.component';
import { CasinoTournamentComponent } from './casino-tournament/casino-tournament.component';
import { StreamingComponent } from './streaming/streaming.component';
import { WhitelabelComponent } from './whitelabel/whitelabel.component';
import { WhitecasinoComponent } from './whitecasino/whitecasino.component';
import { Web3sportbookComponent } from './web3sportbook/web3sportbook.component';
import { CryptoComponent } from './crypto/crypto.component';
import { Web3casinoComponent } from './web3casino/web3casino.component';
import { DecentralizedComponent } from './decentralized/decentralized.component';
import { BitcoinComponent } from './bitcoin/bitcoin.component';
import { CertificateComponent } from './certificate/certificate.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainSecComponent,
    FooterComponent,
    DemoComponent,
    OnlineSportsbookComponent,
    OnlineCasinoSoftwareComponent,
    Header2Component,
    LiveCasinoComponent,
    Footers2Component,
    CasinoGamesComponent,
    LotteryGamesComponent,
    CasinoTournamentComponent,
    StreamingComponent,
    WhitelabelComponent,
    WhitecasinoComponent,
    Web3sportbookComponent,
    CryptoComponent,
    Web3casinoComponent,
    DecentralizedComponent,
    BitcoinComponent,
    CertificateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
