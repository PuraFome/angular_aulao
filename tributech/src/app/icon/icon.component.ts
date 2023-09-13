import { Component, ElementRef, EventEmitter, HostBinding, HostListener, Output, ViewEncapsulation, inject } from '@angular/core';

@Component({
  selector: 'app-icon',
  encapsulation: ViewEncapsulation.ShadowDom,
  template: `
    <p class="ico">
      icon works!
    </p>
  `,
  styles: [
    `
      :host {
        display: flex;
        width: 200px;
        height: 200px;
      }
    `
  ]
})
export class IconComponent {

  @Output()
  mouseOverEvent = new EventEmitter<CustomEvent<MouseEvent>>();

  @HostListener('mouseover', ['$event'])
  _onMouseOver(event: MouseEvent) {
    console.log('MOUSE OVER')
    console.log(event)
    this.mouseOverEvent.emit(new CustomEvent('icon', { detail: event }))
  }

  @HostBinding('id')
  id = 1

  elRef = inject(ElementRef)
}
