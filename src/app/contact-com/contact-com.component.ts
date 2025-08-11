import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as intlTelInput from 'intl-tel-input';
import emailjs from '@emailjs/browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

declare var $: any;

@Component({
  selector: 'app-contact-com',
  templateUrl: './contact-com.component.html',
  styleUrls: ['./contact-com.component.css']
})
export class ContactComComponent implements OnInit, AfterViewInit {
  loder = false;

  form: FormGroup = this.fb.group({
  from_name: ['', [Validators.required, Validators.minLength(2)]],
  from_email: ['', [Validators.required, Validators.email]],
  country: ['', Validators.required],

  number: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
  message: [''],
  });

  constructor(private fb: FormBuilder, private titleService: Title) {}

  get from_name()  { return this.form.get('from_name'); }
  get from_email() { return this.form.get('from_email'); }

  ngOnInit(): void {
    this.titleService.setTitle('Vrnl is Top Sports Betting Software Provider in Bangladesh');

    // Initialize EmailJS ONCE here with your PUBLIC KEY
    emailjs.init('ugrE8NMaO1eYSni-2');

    // Phone intl plugin
    const inputElement = document.querySelector('#phone') as HTMLInputElement | null;
    if (inputElement) {
      intlTelInput(inputElement, {
        initialCountry: 'in',
        separateDialCode: true,
        utilsScript: 'https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js'
      });
    }
  }

  ngAfterViewInit(): void {
    $('#country_selector').countrySelect({
      preferredCountries: ['in', 'gb', 'us']
    });
  }

  async send(): Promise<void> {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loder = true;

    try {
      // Params must match your EmailJS template variable names EXACTLY.
      const params = {
        to_email: 'vrnl.net.info@gmail.com',        // {{to_email}}  <- or hardcode in template To field
        from_name: this.form.value.from_name,       // {{from_name}}
        from_email: this.form.value.from_email,     // {{from_email}}
        reply_to: this.form.value.from_email,       // {{reply_to}}  <- use this in template Reply-To
        country: this.form.value.country,           // {{country}}
        phone_number: this.form.value.number,       // {{phone_number}}
        message: this.form.value.message || ''      // {{message}}
      };

      const response = await emailjs.send(
        'service_lb76cat',      // your EmailJS Service ID
        'template_oz5bymn',     // your EmailJS Template ID
        params
      );

      console.log('EmailJS sent:', response);
      alert('Message has been sent successfully.');
      this.form.reset();
    } catch (error) {
      console.error('EmailJS error:', error);
      alert('Failed to send message. Please check the console and EmailJS logs.');
    } finally {
      this.loder = false;
    }
  }
}
