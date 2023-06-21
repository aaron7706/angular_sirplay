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

const routes: Routes = [
  {path:'',component:MainSecComponent},
  {path:'demo',component:DemoComponent},
  {path:'onlines',component:OnlineSportsbookComponent},
  {path:'onlines_c',component:OnlineCasinoSoftwareComponent},
  {path:'livecasino',component:LiveCasinoComponent},
  {path:'casinogames',component:CasinoGamesComponent},
  {path:'lottery',component:LotteryGamesComponent},
  {path:'casino/tournaments',component:CasinoTournamentComponent},
  {path:'streaming-platform-casino-and-betting',component:StreamingComponent},
  {path:'white-label-betting-platform',component:WhitelabelComponent},
  {path:'casino',component:WhitecasinoComponent},
  {path:'web3-sportsbook',component:Web3sportbookComponent},
  {path:'crypto-casino',component:CryptoComponent},
  {path:'web3-casino',component:Web3casinoComponent},
  {path:'decentralized-sports-betting', component:DecentralizedComponent},
  {path:'bitcoin-sportsbook',component:BitcoinComponent},
  {path:'certified-sports-betting-software',component:CertificateComponent}















];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
