import { Component , OnInit , AfterViewInit} from '@angular/core';
import * as intlTelInput from 'intl-tel-input';
import emailjs from '@emailjs/browser';
// import emailjs from 'emailjs-com';

import { FormBuilder, FormControl, FormGroup , Validators} from '@angular/forms';


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
    from_name: ['',Validators.required],
    to_name:'Admin',
    from_email:['',Validators.required,Validators.email],
    country:'',
    number:'',
    message:'',
   
  })
  constructor(private fb:FormBuilder){}

  open: boolean=false;
  selectedcountry: any;
  contact: { from_name: string; femail: string; countries: string; phone: string; fmessage: string; submit:string; };

  get from_name(){
    return this.form.get('from_name')
  } 

  get from_email(){
    return this.form.get('from_email')
  }
  ngOnInit(): void {


    this.contact = { 
      from_name:"",
      femail:"",
      countries:"",
      phone: "",
      fmessage:"",
      submit:""
     
    };
    
    const inputElement = document.querySelector('#number');
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
    emailjs.init('NEhtK_XNG-W24zuBU')
  let response = await emailjs.send("service_doi5wdl","template_dpcbe7h",{
    
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
  
  
}
  


