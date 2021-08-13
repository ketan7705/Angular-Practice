import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appText]'
})
export class TextDirective implements OnInit {

  constructor(
     private renderer: Renderer2,
     private elmRef: ElementRef
  ) { }

  ngOnInit() {
     this.renderer.setStyle(
        this.elmRef.nativeElement,
        'background',
        'pink'
     );
  }

}