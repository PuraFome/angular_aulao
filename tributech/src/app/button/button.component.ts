import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, ContentChildren, ElementRef, Input, OnChanges, OnInit, QueryList, SimpleChanges, ViewChild } from '@angular/core';
import { IconComponent } from '../icon/icon.component';

class Observer {

}




@Component({
  selector: '[app-button]',
  template: `
    <ng-content select="app-icon"></ng-content>
    <p>button works!</p>
    <ng-content> </ng-content>
    <ng-content> </ng-content>
    <ng-content> </ng-content>

    <h2 #headingRef>heading</h2>
  `,
  styles: [
  ]
})
export class ButtonComponent
      implements OnInit, AfterContentInit, AfterViewInit, OnChanges, AfterViewChecked{

  @ContentChild(IconComponent)
  icon!: IconComponent;

  @ContentChildren(IconComponent)
  icons!: QueryList<IconComponent>;

  @ViewChild('headingRef')
  headingRef!: ElementRef<HTMLHeadingElement>;

  #color = 'purple'

  @Input()
  set color(color: string){
    this.#color = color;
    this.elRef.nativeElement.style.backgroundColor = this.#color
  }


  constructor(
    readonly elRef: ElementRef
  ) {
    console.log(this.elRef)
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked')

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log(this.color)

  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
    console.log(this.headingRef)
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit')
    console.log(this.icon)
    console.log(this.icons)
  }

  ngOnInit(): void {
    console.log('On Init')
    this.elRef.nativeElement.style.backgroundColor = this.#color
  }

}
