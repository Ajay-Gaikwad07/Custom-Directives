import { Directive ,ElementRef,HostListener} from '@angular/core';

@Directive({
  selector: '[appCompFailure]'
})
export class CompFailureDirective {

  constructor( public abc:ElementRef) 
  {
    abc.nativeElement.style.background =""
   }

   @HostListener('mouseenter')onmouseenter()
   {
    this.abc.nativeElement.style.color ="red"
   }
   
   @HostListener('mouseleave')onmouseleave()
   {
    this.abc.nativeElement.style.color ="black"
   }
}



