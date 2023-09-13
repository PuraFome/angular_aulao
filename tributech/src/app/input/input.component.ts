import { Component, ElementRef, HostBinding, Renderer2 } from '@angular/core';
import { DefaultValueAccessor, NgControl } from '@angular/forms';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'input[app-input]',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent extends DefaultValueAccessor {
  @HostBinding('id')
  id = 1

  constructor(
    render2: Renderer2,
    elRef: ElementRef,
    ngControl: NgControl
  ){
    super(render2, elRef, true)

    console.log(ngControl)
  }
}
