import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputMaxLength]'
})
export class InputMaxLengthDirective {

  @Input() appInputMaxLength: number;

  constructor() { }

  @HostListener('keypress', ['$event']) onKeyPress($event: any) {
    if ($event.srcElement.value.length === this.appInputMaxLength) {
      $event.preventDefault();
    }
  }
}