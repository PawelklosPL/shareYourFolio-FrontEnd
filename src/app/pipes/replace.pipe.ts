
import { Pipe, PipeTransform } from '@angular/core';
import { element } from 'protractor';

@Pipe({
  name: 'replaceTags'
})
export class ReplacePipe implements PipeTransform {

  transform(value: string[], separator: string): any {
    for (let i = 0; i < value.length; i++) {
      value[i] = '' + value[i] + ' ';
    }
    return value.join('');
  }


}