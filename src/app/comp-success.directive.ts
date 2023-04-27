import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCompSuccess]'
})
export class CompSuccessDirective {

  constructor( public abc:ElementRef) 
  {
    abc.nativeElement.style.color =""
   }

   @HostListener('mouseenter')onmouseenter()
   {
    this.abc.nativeElement.style.color="green"
   }
   
   @HostListener('mouseleave')onmouseleave()
   {
    this.abc.nativeElement.style.color ="black"
   }
}
