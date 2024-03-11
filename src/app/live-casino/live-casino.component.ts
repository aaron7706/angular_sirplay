import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-live-casino',
  templateUrl: './live-casino.component.html',
  styleUrls: ['./live-casino.component.css']
})
export class LiveCasinoComponent {

  constructor(private titleService: Title,
    private meta: Meta) {
      this.titleService.setTitle(' White label Casino - start your own online casino');
      this.meta.addTag({name:'description',content:'Immerse yourself in a variety of omline casino games for an exciting gaming experience.'});
      this.meta.addTag({name:'keyword',content:'live casino,  online casino'});
  }
}
