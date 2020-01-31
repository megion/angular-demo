import { Directive, TemplateRef, ViewContainerRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appDelay]',
})
export class DelayDirective implements OnInit {
  constructor(
    private template: TemplateRef<any>,
    private view: ViewContainerRef,
  ) {}

  ngOnInit() {
    this.view.createEmbeddedView(this.template);
  }
}
