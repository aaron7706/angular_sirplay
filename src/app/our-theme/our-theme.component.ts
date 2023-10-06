import { Component } from '@angular/core';

@Component({
  selector: 'app-our-theme',
  templateUrl: './our-theme.component.html',
  styleUrls: ['./our-theme.component.css']
})
export class OurThemeComponent {
  copyed: string | null = null;

copytoclip(value: string) {
  const textToCopy = document.getElementById(value)?.textContent || '';
  navigator.clipboard.writeText(textToCopy).then(() => {
    this.copyed = value;

    setTimeout(() => {
      this.copyed = null;
    }, 3000);
  });
  
}

  
}