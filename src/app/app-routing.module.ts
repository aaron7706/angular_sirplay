import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainSecComponent } from './main-sec/main-sec.component';
import { DemoComponent } from './demo/demo.component';
import { OnlineSportsbookComponent } from './online-sportsbook/online-sportsbook.component';
import { OnlineCasinoSoftwareComponent } from './online-casino-software/online-casino-software.component';
import { LiveCasinoComponent } from './live-casino/live-casino.component';
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
import { ContactComponent } from './contact/contact.component';
import { WageringComponent } from './wagering/wagering.component';
import { CashoutComponent } from './cashout/cashout.component';
import { IFrameComponent } from './i-frame/i-frame.component';
import { TerminalComponent } from './terminal/terminal.component';
import { SportbetComponent } from './sportbet/sportbet.component';
import { RetailComponent } from './retail/retail.component';
import { EsportComponent } from './esport/esport.component';
import { MobileComponent } from './mobile/mobile.component';
import { AboutComponent } from './about/about.component';
import { FAQComponent } from './faq/faq.component';
import { ScrollBtnComponent } from './scroll-btn/scroll-btn.component';
import { OurThemeComponent } from './our-theme/our-theme.component';
const routes: Routes = [
  {path:'',component:MainSecComponent},
  {path:'demo-sportsbook',component:DemoComponent},
  {path:'online-sportsbook-software',component:OnlineSportsbookComponent},
  {path:'online-casino-software',component:OnlineCasinoSoftwareComponent},
  {path:'casino/live-casino',component:LiveCasinoComponent},
  {path:'casino/casino-games',component:CasinoGamesComponent},
  {path:'casino/lottery-games',component:LotteryGamesComponent},
  {path:'casino/tournaments',component:CasinoTournamentComponent},
  {path:'streaming-platform-casino-and-betting',component:StreamingComponent},
  {path:'white-label-betting-platform',component:WhitelabelComponent},
  {path:'casino',component:WhitecasinoComponent},
  {path:'web3-sportsbook',component:Web3sportbookComponent},
  {path:'crypto-casino',component:CryptoComponent},
  {path:'web3-casino',component:Web3casinoComponent},
  {path:'decentralized-sports-betting', component:DecentralizedComponent},
  {path:'bitcoin-sportsbook',component:BitcoinComponent},
  {path:'certified-sports-betting-software',component:CertificateComponent},
  {path:'contact',component:ContactComponent},
  {path:'wagering-solutions',component:WageringComponent},
  {path:'cashout', component:CashoutComponent},
  {path:'sportsbook-iframe', component:IFrameComponent},
  {path:'betting-terminals', component:TerminalComponent},
  {path:'sports-betting-software', component:SportbetComponent},
  {path:'sports-betting-software/retail-solutions',component:RetailComponent},
  {path:'sports-betting-software/esports-betting-software',component:EsportComponent},
  {path:'sports-betting-software/mobile-betting-software',component:MobileComponent},
  {path:'about-us',component:AboutComponent},
  {path:'FAQ',component:FAQComponent},
  {path:'our-theme', component:OurThemeComponent},
  {path:'scroll-btn', component:ScrollBtnComponent}

















];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
