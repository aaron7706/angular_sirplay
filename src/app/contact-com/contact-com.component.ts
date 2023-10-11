import { Component , OnInit , AfterViewInit} from '@angular/core';
import * as intlTelInput from 'intl-tel-input';
import emailjs from '@emailjs/browser';
// import emailjs from 'emailjs-com';

import { FormBuilder, FormGroup } from '@angular/forms';


declare var $: any;

@Component({
  selector: 'app-contact-com',
  templateUrl: './contact-com.component.html',
  styleUrls: ['./contact-com.component.css']
})


export class ContactComComponent implements OnInit {
  selectedOption:any=''
  loder:boolean=false;

  form: FormGroup =this.fb.group({
    from_name:'',
    to_name:'Admin',
    from_email:'',
    country:'',
    number:'',
    message:''

  })
  constructor(private fb:FormBuilder){}
//    countries= [
//     { name: "india", img: "assets/FLAG.jpg"  },
//     { name: "united", img: "assets/en.png" },
//     { name: "jermany", img: "assets/jr.png" },
//     { name: "array", img: "assets/FLAG.jpg" },
//     { name: "india", img: "assets/FLAG.jpg"  },
//     { name: "united", img: "assets/en.png" },
//     { name: "jermany", img: "assets/jr.png" },
//     { name: "array", img: "assets/FLAG.jpg" },
//     { name: "india", img: "assets/FLAG.jpg"  },
//     { name: "united", img: "assets/en.png" },
//     { name: "jermany", img: "assets/jr.png" },
//     { name: "array", img: "assets/FLAG.jpg" },


// ];
  open: boolean=false;
  selectedcountry: any;
  contact: { from_name: string; femail: string; countries: string; phone: string; fmessage: string; submit:string; };


  ngOnInit(): void {


    this.contact = { 
      from_name:"",
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

    this.loder=true
    console.log(contactForm.value);
    setTimeout(() => {
      // After some processing, hide the loader
      this.loder = false;

      // Handle your form submission logic here (e.g., sending data to the server)
    }, 500); // Simulating a delay of 2 seconds
  }

  openbutton(){
    $(".country-list").toggleClass("hide");
    console.log("sksskdk");
    
  }
   async send(){
    emailjs.init('tJ20h_IDOpuHeRXCS')
  let response = await emailjs.send("service_v70dr4s","template_yq8v5o5",{
    
    to_name: this.form.value.to_name,
    from_name: this.form.value.from_name,
    from_email: this.form.value.from_email,
    country: this.form.value.country,
    phone_number: this.form.value.number,
    message: this.form.value.message,
    });
    console.log(response);
    
    alert('Message has been send successfully')
    this.form.reset()
  }
  // emailjs.send("service_yoss2mb","template_ovw2e95",{
  //   from_name: "admin",
  //   to_name: "contemt",
  //   from_email: "tech@gmail.com",
  //   Country: "india",
  //   Phone_number: "45454545",
  //   message: "hihiihih",
  //   });
    

  // async send() {
  //   emailjs.init('pIj92LaMGVqrI-q3D');
  
  //   try {
  //     let response = await emailjs.send('service_s3kv5f8', 'template_r29xby7', {
  //       to_name: this.form.value.to_name,
  //       from_name: this.form.value.from_name,
  //       from_email: this.form.value.from_email,
  //       country: this.form.value.country,
  //       phone_number: this.form.value.phone_number,
  //       message: this.form.value.message,
  //     });
  
  //     console.log(response);
  
  //     alert('Message has been sent successfully');
  
  //     // Add a delay of 2 seconds (2000 milliseconds) before resetting the form
  //     setTimeout(() => {
  //       this.form.reset();
  //     }, 2000);
  //   } catch (error) {
  //     console.error('Error sending email:', error);
  //     alert('Failed to send message. Please try again later.');
  //   }
  // }
  
}
  


