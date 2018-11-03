import { Directive,
         ElementRef } from '@angular/core';

@Directive({
    selector: '[appFullHeight]'
})
/**
* Directive to full height a dom element
*/
export class FullHeightDirective {

    /**
    * @ignore
    */
    constructor(el: ElementRef) {
        el.nativeElement.style.height = '100%';
    }
}
