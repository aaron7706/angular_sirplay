import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
    selector: 'app-demo-request',
    templateUrl: './demo-request.component.html',
    styleUrls: ['./demo-request.component.css']
})
export class DemoRequestComponent implements OnInit {

    @Input() visible = false;
    @Output() closed = new EventEmitter<void>();
    @Input() demoUrl!: string;

    closeModal(): void {
        this.closed.emit();
        // Reset the form (clears errors and values)
        this.demoForm.reset({
            telegramStatus: '',
            telegramHandle: '',
        });
        this.setDefaultCountryFromIP();

        // Optionally: clear flags or other UI states
        this.showTelegramHandle = false;
        this.demoForm.markAsUntouched();
    }
    demoForm!: FormGroup;
    countries = [
        { name: "Afghanistan", flag: "af", dialCode: "+93" },
        { name: "Åland Islands", flag: "ax", dialCode: "+358" },
        { name: "Albania", flag: "al", dialCode: "+355" },
        { name: "Algeria", flag: "dz", dialCode: "+213" },
        { name: "American Samoa", flag: "as", dialCode: "+1-684" },
        { name: "Andorra", flag: "ad", dialCode: "+376" },
        { name: "Angola", flag: "ao", dialCode: "+244" },
        { name: "Anguilla", flag: "ai", dialCode: "+1-264" },
        { name: "Antarctica", flag: "aq", dialCode: "+672" },
        { name: "Antigua and Barbuda", flag: "ag", dialCode: "+1-268" },
        { name: "Argentina", flag: "ar", dialCode: "+54" },
        { name: "Armenia", flag: "am", dialCode: "+374" },
        { name: "Aruba", flag: "aw", dialCode: "+297" },
        { name: "Australia", flag: "au", dialCode: "+61" },
        { name: "Austria", flag: "at", dialCode: "+43" },
        { name: "Azerbaijan", flag: "az", dialCode: "+994" },
        { name: "Bahamas", flag: "bs", dialCode: "+1-242" },
        { name: "Bahrain", flag: "bh", dialCode: "+973" },
        { name: "Bangladesh", flag: "bd", dialCode: "+880" },
        { name: "Barbados", flag: "bb", dialCode: "+1-246" },
        { name: "Belarus", flag: "by", dialCode: "+375" },
        { name: "Belgium", flag: "be", dialCode: "+32" },
        { name: "Belize", flag: "bz", dialCode: "+501" },
        { name: "Benin", flag: "bj", dialCode: "+229" },
        { name: "Bermuda", flag: "bm", dialCode: "+1-441" },
        { name: "Bhutan", flag: "bt", dialCode: "+975" },
        { name: "Bolivia", flag: "bo", dialCode: "+591" },
        { name: "Bosnia and Herzegovina", flag: "ba", dialCode: "+387" },
        { name: "Botswana", flag: "bw", dialCode: "+267" },
        { name: "Brazil", flag: "br", dialCode: "+55" },
        { name: "Brunei Darussalam", flag: "bn", dialCode: "+673" },
        { name: "Bulgaria", flag: "bg", dialCode: "+359" },
        { name: "Burkina Faso", flag: "bf", dialCode: "+226" },
        { name: "Burundi", flag: "bi", dialCode: "+257" },
        { name: "Cambodia", flag: "kh", dialCode: "+855" },
        { name: "Cameroon", flag: "cm", dialCode: "+237" },
        { name: "Canada", flag: "ca", dialCode: "+1" },
        { name: "Cape Verde", flag: "cv", dialCode: "+238" },
        { name: "Cayman Islands", flag: "ky", dialCode: "+1-345" },
        { name: "Central African Republic", flag: "cf", dialCode: "+236" },
        { name: "Chad", flag: "td", dialCode: "+235" },
        { name: "Chile", flag: "cl", dialCode: "+56" },
        { name: "China", flag: "cn", dialCode: "+86" },
        { name: "Colombia", flag: "co", dialCode: "+57" },
        { name: "Comoros", flag: "km", dialCode: "+269" },
        { name: "Congo", flag: "cg", dialCode: "+242" },
        { name: "Democratic Republic of the Congo", flag: "cd", dialCode: "+243" },
        { name: "Costa Rica", flag: "cr", dialCode: "+506" },
        { name: "Croatia", flag: "hr", dialCode: "+385" },
        { name: "Cuba", flag: "cu", dialCode: "+53" },
        { name: "Cyprus", flag: "cy", dialCode: "+357" },
        { name: "Czechia", flag: "cz", dialCode: "+420" },
        { name: "Denmark", flag: "dk", dialCode: "+45" },
        { name: "Djibouti", flag: "dj", dialCode: "+253" },
        { name: "Dominica", flag: "dm", dialCode: "+1-767" },
        { name: "Dominican Republic", flag: "do", dialCode: "+1-809" },
        { name: "Ecuador", flag: "ec", dialCode: "+593" },
        { name: "Egypt", flag: "eg", dialCode: "+20" },
        { name: "El Salvador", flag: "sv", dialCode: "+503" },
        { name: "Equatorial Guinea", flag: "gq", dialCode: "+240" },
        { name: "Eritrea", flag: "er", dialCode: "+291" },
        { name: "Estonia", flag: "ee", dialCode: "+372" },
        { name: "Eswatini", flag: "sz", dialCode: "+268" },
        { name: "Ethiopia", flag: "et", dialCode: "+251" },
        { name: "Fiji", flag: "fj", dialCode: "+679" },
        { name: "Finland", flag: "fi", dialCode: "+358" },
        { name: "France", flag: "fr", dialCode: "+33" },
        { name: "French Polynesia", flag: "pf", dialCode: "+689" },
        { name: "Gabon", flag: "ga", dialCode: "+241" },
        { name: "Gambia", flag: "gm", dialCode: "+220" },
        { name: "Georgia", flag: "ge", dialCode: "+995" },
        { name: "Germany", flag: "de", dialCode: "+49" },
        { name: "Ghana", flag: "gh", dialCode: "+233" },
        { name: "Gibraltar", flag: "gi", dialCode: "+350" },
        { name: "Greece", flag: "gr", dialCode: "+30" },
        { name: "Greenland", flag: "gl", dialCode: "+299" },
        { name: "Grenada", flag: "gd", dialCode: "+1-473" },
        { name: "Guam", flag: "gu", dialCode: "+1-671" },
        { name: "Guatemala", flag: "gt", dialCode: "+502" },
        { name: "Guinea", flag: "gn", dialCode: "+224" },
        { name: "Guinea-Bissau", flag: "gw", dialCode: "+245" },
        { name: "Guyana", flag: "gy", dialCode: "+592" },
        { name: "Haiti", flag: "ht", dialCode: "+509" },
        { name: "Honduras", flag: "hn", dialCode: "+504" },
        { name: "Hong Kong", flag: "hk", dialCode: "+852" },
        { name: "Hungary", flag: "hu", dialCode: "+36" },
        { name: "Iceland", flag: "is", dialCode: "+354" },
        { name: "India", flag: "in", dialCode: "+91" },
        { name: "Indonesia", flag: "id", dialCode: "+62" },
        { name: "Iran", flag: "ir", dialCode: "+98" },
        { name: "Iraq", flag: "iq", dialCode: "+964" },
        { name: "Ireland", flag: "ie", dialCode: "+353" },
        { name: "Israel", flag: "il", dialCode: "+972" },
        { name: "Italy", flag: "it", dialCode: "+39" },
        { name: "Jamaica", flag: "jm", dialCode: "+1-876" },
        { name: "Japan", flag: "jp", dialCode: "+81" },
        { name: "Jordan", flag: "jo", dialCode: "+962" },
        { name: "Kazakhstan", flag: "kz", dialCode: "+7" },
        { name: "Kenya", flag: "ke", dialCode: "+254" },
        { name: "Kiribati", flag: "ki", dialCode: "+686" },
        { name: "Kuwait", flag: "kw", dialCode: "+965" },
        { name: "Kyrgyzstan", flag: "kg", dialCode: "+996" },
        { name: "Laos", flag: "la", dialCode: "+856" },
        { name: "Latvia", flag: "lv", dialCode: "+371" },
        { name: "Lebanon", flag: "lb", dialCode: "+961" },
        { name: "Lesotho", flag: "ls", dialCode: "+266" },
        { name: "Liberia", flag: "lr", dialCode: "+231" },
        { name: "Libya", flag: "ly", dialCode: "+218" },
        { name: "Liechtenstein", flag: "li", dialCode: "+423" },
        { name: "Lithuania", flag: "lt", dialCode: "+370" },
        { name: "Luxembourg", flag: "lu", dialCode: "+352" },
        { name: "Macau", flag: "mo", dialCode: "+853" },
        { name: "Madagascar", flag: "mg", dialCode: "+261" },
        { name: "Malawi", flag: "mw", dialCode: "+265" },
        { name: "Malaysia", flag: "my", dialCode: "+60" },
        { name: "Maldives", flag: "mv", dialCode: "+960" },
        { name: "Mali", flag: "ml", dialCode: "+223" },
        { name: "Malta", flag: "mt", dialCode: "+356" },
        { name: "Marshall Islands", flag: "mh", dialCode: "+692" },
        { name: "Martinique", flag: "mq", dialCode: "+596" },
        { name: "Mauritania", flag: "mr", dialCode: "+222" },
        { name: "Mauritius", flag: "mu", dialCode: "+230" },
        { name: "Mexico", flag: "mx", dialCode: "+52" },
        { name: "Micronesia", flag: "fm", dialCode: "+691" },
        { name: "Moldova", flag: "md", dialCode: "+373" },
        { name: "Monaco", flag: "mc", dialCode: "+377" },
        { name: "Mongolia", flag: "mn", dialCode: "+976" },
        { name: "Montenegro", flag: "me", dialCode: "+382" },
        { name: "Montserrat", flag: "ms", dialCode: "+1-664" },
        { name: "Morocco", flag: "ma", dialCode: "+212" },
        { name: "Mozambique", flag: "mz", dialCode: "+258" },
        { name: "Myanmar", flag: "mm", dialCode: "+95" },
        { name: "Namibia", flag: "na", dialCode: "+264" },
        { name: "Nauru", flag: "nr", dialCode: "+674" },
        { name: "Nepal", flag: "np", dialCode: "+977" },
        { name: "Netherlands", flag: "nl", dialCode: "+31" },
        { name: "New Zealand", flag: "nz", dialCode: "+64" },
        { name: "Nicaragua", flag: "ni", dialCode: "+505" },
        { name: "Niger", flag: "ne", dialCode: "+227" },
        { name: "Nigeria", flag: "ng", dialCode: "+234" },
        { name: "Niue", flag: "nu", dialCode: "+683" },
        { name: "North Korea", flag: "kp", dialCode: "+850" },
        { name: "North Macedonia", flag: "mk", dialCode: "+389" },
        { name: "Northern Mariana Islands", flag: "mp", dialCode: "+1-670" },
        { name: "Norway", flag: "no", dialCode: "+47" },
        { name: "Oman", flag: "om", dialCode: "+968" },
        { name: "Pakistan", flag: "pk", dialCode: "+92" },
        { name: "Palau", flag: "pw", dialCode: "+680" },
        { name: "Palestine", flag: "ps", dialCode: "+970" },
        { name: "Panama", flag: "pa", dialCode: "+507" },
        { name: "Papua New Guinea", flag: "pg", dialCode: "+675" },
        { name: "Paraguay", flag: "py", dialCode: "+595" },
        { name: "Peru", flag: "pe", dialCode: "+51" },
        { name: "Philippines", flag: "ph", dialCode: "+63" },
        { name: "Poland", flag: "pl", dialCode: "+48" },
        { name: "Portugal", flag: "pt", dialCode: "+351" },
        { name: "Puerto Rico", flag: "pr", dialCode: "+1-787" },
        { name: "Qatar", flag: "qa", dialCode: "+974" },
        { name: "Réunion", flag: "re", dialCode: "+262" },
        { name: "Romania", flag: "ro", dialCode: "+40" },
        { name: "Russia", flag: "ru", dialCode: "+7" },
        { name: "Rwanda", flag: "rw", dialCode: "+250" },
        { name: "Saint Barthélemy", flag: "bl", dialCode: "+590" },
        { name: "Saint Helena", flag: "sh", dialCode: "+290" },
        { name: "Saint Kitts and Nevis", flag: "kn", dialCode: "+1-869" },
        { name: "Saint Lucia", flag: "lc", dialCode: "+1-758" },
        { name: "Saint Martin", flag: "mf", dialCode: "+590" },
        { name: "Saint Pierre and Miquelon", flag: "pm", dialCode: "+508" },
        { name: "Saint Vincent and the Grenadines", flag: "vc", dialCode: "+1-784" },
        { name: "Samoa", flag: "ws", dialCode: "+685" },
        { name: "San Marino", flag: "sm", dialCode: "+378" },
        { name: "São Tomé and Príncipe", flag: "st", dialCode: "+239" },
        { name: "Saudi Arabia", flag: "sa", dialCode: "+966" },
        { name: "Senegal", flag: "sn", dialCode: "+221" },
        { name: "Serbia", flag: "rs", dialCode: "+381" },
        { name: "Seychelles", flag: "sc", dialCode: "+248" },
        { name: "Sierra Leone", flag: "sl", dialCode: "+232" },
        { name: "Singapore", flag: "sg", dialCode: "+65" },
        { name: "Sint Maarten", flag: "sx", dialCode: "+1-721" },
        { name: "Slovakia", flag: "sk", dialCode: "+421" },
        { name: "Slovenia", flag: "si", dialCode: "+386" },
        { name: "Solomon Islands", flag: "sb", dialCode: "+677" },
        { name: "Somalia", flag: "so", dialCode: "+252" },
        { name: "South Africa", flag: "za", dialCode: "+27" },
        { name: "South Korea", flag: "kr", dialCode: "+82" },
        { name: "South Sudan", flag: "ss", dialCode: "+211" },
        { name: "Spain", flag: "es", dialCode: "+34" },
        { name: "Sri Lanka", flag: "lk", dialCode: "+94" },
        { name: "Sudan", flag: "sd", dialCode: "+249" },
        { name: "Suriname", flag: "sr", dialCode: "+597" },
        { name: "Sweden", flag: "se", dialCode: "+46" },
        { name: "Switzerland", flag: "ch", dialCode: "+41" },
        { name: "Syria", flag: "sy", dialCode: "+963" },
        { name: "Taiwan", flag: "tw", dialCode: "+886" },
        { name: "Tajikistan", flag: "tj", dialCode: "+992" },
        { name: "Tanzania", flag: "tz", dialCode: "+255" },
        { name: "Thailand", flag: "th", dialCode: "+66" },
        { name: "Timor-Leste", flag: "tl", dialCode: "+670" },
        { name: "Togo", flag: "tg", dialCode: "+228" },
        { name: "Tokelau", flag: "tk", dialCode: "+690" },
        { name: "Tonga", flag: "to", dialCode: "+676" },
        { name: "Trinidad and Tobago", flag: "tt", dialCode: "+1-868" },
        { name: "Tunisia", flag: "tn", dialCode: "+216" },
        { name: "Turkey", flag: "tr", dialCode: "+90" },
        { name: "Turkmenistan", flag: "tm", dialCode: "+993" },
        { name: "Tuvalu", flag: "tv", dialCode: "+688" },
        { name: "Uganda", flag: "ug", dialCode: "+256" },
        { name: "Ukraine", flag: "ua", dialCode: "+380" },
        { name: "United Arab Emirates", flag: "ae", dialCode: "+971" },
        { name: "United Kingdom", flag: "gb", dialCode: "+44" },
        { name: "United States", flag: "us", dialCode: "+1" },
        { name: "Uruguay", flag: "uy", dialCode: "+598" },
        { name: "Uzbekistan", flag: "uz", dialCode: "+998" },
        { name: "Vanuatu", flag: "vu", dialCode: "+678" },
        { name: "Vatican City", flag: "va", dialCode: "+379" },
        { name: "Venezuela", flag: "ve", dialCode: "+58" },
        { name: "Vietnam", flag: "vn", dialCode: "+84" },
        { name: "Wallis and Futuna", flag: "wf", dialCode: "+681" },
        { name: "Western Sahara", flag: "eh", dialCode: "+212" },
        { name: "Yemen", flag: "ye", dialCode: "+967" },
        { name: "Zambia", flag: "zm", dialCode: "+260" },
        { name: "Zimbabwe", flag: "zw", dialCode: "+263" }
    ];


    selectedFlagUrl: string = '';
    showTelegramHandle = false;
    showModal = true;

    // Toast
    toastVisible = false;
    toastType = 'info';
    toastMessage = '';

    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
        this.demoForm = this.fb.group({
            name: ['', [Validators.required, Validators.minLength(3)]],
            email: ['', [Validators.required, Validators.email]],
            country: ['', Validators.required],
            district: ['', Validators.required],
            whatsapp: ['', [Validators.required, Validators.pattern(/^[0-9]{6,15}$/)]],
            turnover: ['', Validators.required],
            users: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
            issues: ['', Validators.required],
            message: ['', Validators.required],
            telegramStatus: ['', Validators.required],
            telegramHandle: ['', [Validators.required,
            Validators.pattern(/^@.+$/)]]
        });
        this.setDefaultCountryFromIP();

    }
    selectedDialCode: string = ''; // default (can be updated via country)
    private hasFetchedLocation = false;

    setDefaultCountryFromIP(): void {
        if (this.hasFetchedLocation) return;
        fetch('https://geolocation-db.com/json/')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(res => {
                const countryName = res.country_name;
                if (countryName) {
                    const country = this.countries.find(c => c.name === countryName);
                    if (country) {
                        this.demoForm.patchValue({ country: country.name });
                        this.updateFlagByCountryName(country.name);
                        this.selectedFlagUrl = country.flag;
                        this.selectedDialCode = country.dialCode;
                    }
                }
                this.hasFetchedLocation = true;
            })
            .catch(error => {
                console.error('Fetch error:', error);
                // fallback country or other handling if needed
            });
    }




    selectedFlag: string | null = null;

    updateFlagByCountryName(name: string): void {
        const country = this.countries.find(c => c.name === name);
        if (country) {
            this.selectedFlag = country.flag;
        }
    }


    updateFlag(event: Event) {
        const select = event.target as HTMLSelectElement;
        const selectedOption = select.selectedOptions[0];
        const countryName = selectedOption.value;
        const country = this.countries.find(c => c.name === countryName);
        if (country) {
            this.selectedFlag = country.flag;
            this.selectedDialCode = country.dialCode;
        }
    }


    onBackdropClick(event: MouseEvent): void {
        this.closeModal();
    }



    toggleTelegramHandle(event: Event): void {
        const value = (event.target as HTMLSelectElement).value;
        this.showTelegramHandle = value === 'Yes';

        const handleControl = this.demoForm.get('telegramHandle');
        if (this.showTelegramHandle) {
            handleControl?.setValidators([
                Validators.required,
                Validators.pattern(/^@.+$/)
            ]);

        } else {
            handleControl?.clearValidators();
            handleControl?.setValue('');
        }
        handleControl?.updateValueAndValidity();
    }

    async onSubmit(): Promise<void> {
        if (this.demoForm.invalid) {
            this.demoForm.markAllAsTouched();
            this.showToast('Please fill all required fields.', 'error');
            return;
        }

        const formValues = this.demoForm.value;
        const formData = new FormData();

        for (const key in formValues) {
            if (key === 'whatsapp') {
                formData.set(key, this.selectedDialCode + formValues[key]);
            } else {
                formData.set(key, formValues[key]);
            }
        }

        // Add client IP address
        try {
            const ipRes = await fetch('https://api.ipify.org?format=json');
            const ipJson = await ipRes.json();
            formData.set('ip', ipJson.ip);
        } catch (err) {
            console.warn("IP fetch failed", err);
        }

        // Add origin (domain)
        formData.set("site", this.demoUrl);
        formData.set("timestamp", new Date().toISOString());
        formData.set('requestedFrom', window.location.hostname);

        this.showToast('Submitting request...', 'info');

        try {
            const submitRes = await fetch('https://script.google.com/macros/s/AKfycbyWyO_fHI5wKhUJujYgD_9q7h-mtQs18g-3RmdSfSQ4qvoqGKyP6UIgobCp8x8SRMA/exec', {
                method: 'POST',
                body: formData
            });

            if (!submitRes.ok) throw new Error("Submission failed");

            const result = await submitRes.json();
            console.log('Form submitted:', result);

            this.showToast('Demo request submitted successfully!', 'success');
            
            setTimeout(() => {
                this.closeModal();
            }, 3000); // delay in milliseconds


        } catch (error) {
            console.error('Submission error:', error);
            this.showToast('An error occurred. Please try again.', 'error');
        }
        // const modalContent = document.querySelector('.modal-content');
        // if (modalContent) {
        //     modalContent.scrollTop = 0; // Instant scroll
        //     // OR
        //     modalContent.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll
        // }
    }


    showToast(message: string, type: 'success' | 'error' | 'info'): void {
        this.toastMessage = message;
        this.toastType = type;
        this.toastVisible = true;

        setTimeout(() => this.hideToast(), 5000);
    }

    hideToast(): void {
        this.toastVisible = false;
    }
}
