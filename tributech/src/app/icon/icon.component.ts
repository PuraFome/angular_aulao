import { Component, ElementRef, inject } from '@angular/core';

@Component({
  selector: 'app-icon',
  template: `
    <p>
      icon works!
    </p>
  `,
  styles: [
  ]
})
export class IconComponent {

  elRef = inject(ElementRef)
}
