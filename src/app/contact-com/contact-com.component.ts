import { Component , OnInit , AfterViewInit} from '@angular/core';
import * as intlTelInput from 'intl-tel-input';


declare var $: any;

@Component({
  selector: 'app-contact-com',
  templateUrl: './contact-com.component.html',
  styleUrls: ['./contact-com.component.css']
})


export class ContactComComponent implements OnInit {
  selectedOption:any=''
  loder:boolean=false;
   countries= [
    { name: "india", img: "assets/FLAG.jpg"  },
    { name: "united", img: "assets/en.png" },
    { name: "jermany", img: "assets/jr.png" },
    { name: "array", img: "assets/FLAG.jpg" },
    { name: "india", img: "assets/FLAG.jpg"  },
    { name: "united", img: "assets/en.png" },
    { name: "jermany", img: "assets/jr.png" },
    { name: "array", img: "assets/FLAG.jpg" },
    { name: "india", img: "assets/FLAG.jpg"  },
    { name: "united", img: "assets/en.png" },
    { name: "jermany", img: "assets/jr.png" },
    { name: "array", img: "assets/FLAG.jpg" },


];
  open: boolean=false;
  selectedcountry: any;
  contact: { fname: string; femail: string; countries: string; phone: string; fmessage: string; submit:string; };


  ngOnInit(): void {


    this.contact = { 
      fname:"",
      femail:"",
      countries:"",
      phone: "",
      fmessage:"",
      submit:""
     
    };
    
    const inputElement = document.querySelector('#phone');
    if(inputElement){
      intlTelInput(inputElement,{
        initialCountry :'in',
        separateDialCode: true,
        utilsScript: 'https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js'
      });
    }


    

  }

  selectdrop(){
    this.open=!this.open
  }
  selectcountry(e){
    this.selectedcountry = e
    console.log(this.selectedcountry);
  }

  ngAfterViewInit() {
    // Use jQuery code here
    $("#country_selector").countrySelect({
      preferredCountries: ['in', 'gb', 'us']
    });
  }



  onSubmit(contactForm) {
    // this.loder=true
    
    console.log(contactForm.value);
    
  }

}
