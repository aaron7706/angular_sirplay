import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-whitecasino',
  templateUrl: './whitecasino.component.html',
  styleUrls: ['./whitecasino.component.css']
})
export class WhitecasinoComponent {
  constructor(private titleService: Title,
    private meta: Meta) {
      this.titleService.setTitle('White label Casino - Easily start your online casino with our White Label Casino solution.');
      this.meta.addTag({name:'description',content:" Start your online casino journey with VRNL, offering comprehensive solutions for starting and managing your casino platform effectively"});
      this.meta.addTag({name:'keyword',content:'White label casino, white label betting platform , onlne casino'});
  }
  

}
