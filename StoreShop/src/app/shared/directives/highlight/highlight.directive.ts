import { Directive,ElementRef } from '@angular/core';
import { element } from 'protractor';
/* ElementRef para modificar el comportamiento del DOM*/
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(element:ElementRef) {
    element.nativeElement.style.backgroundColor = 'gray';
   }
}
