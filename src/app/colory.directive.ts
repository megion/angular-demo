import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appColory]',
  exportAs: 'colory'
})
export class ColoryDirective {
  @HostBinding('style.color') myColor: string;

  @HostListener('click', ['$event']) handleClick(): void {
    this.myColor = 'blue';
  }

  setColor(color: string) {
    this.myColor = color;
  }

  constructor() {
    this.myColor = 'red';
  }
}
