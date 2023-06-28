import { Component , OnInit  } from '@angular/core';
import * as intlTelInput from 'intl-tel-input';
declare var $: any;

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css']
})
export class TerminalComponent implements OnInit {

  ngOnInit(): void {

    
    const inputElement = document.querySelector('#phone');
    if(inputElement){
      intlTelInput(inputElement,{
        initialCountry :'in',
        separateDialCode: true,
        utilsScript: 'https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js'
      });
    }


    
  }
  ngAfterViewInit() {
    $("#country_selector").countrySelect({
      preferredCountries: ['in', 'gb', 'us']
    });
  }

}
